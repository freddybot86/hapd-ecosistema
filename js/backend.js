/* ═══════════════════════════════════════════════════════════
   BACKEND — Conexión con Google Apps Script Web App
   ═══════════════════════════════════════════════════════════
   Cargar DESPUÉS de app.js en index.html.

   CONFIGURACIÓN:
     1. Publicar apps-script/GastroJobs_WebApp_Psico.js como Web App
     2. Pegar la URL en WEB_APP_URL abajo
     3. Si WEB_APP_URL está vacío → modo desarrollo (mock local)

   NOTA CORS:
     No se envía Content-Type: application/json para evitar el
     preflight OPTIONS (que Apps Script no maneja en todos los browsers).
     fetch() sin Content-Type usa text/plain → petición "simple" → sin preflight.
     El script parsea e.postData.contents igual en ambos casos.
   ═══════════════════════════════════════════════════════════ */

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxSrqekKxbqkzDJrZeCTLwzB7gS7iLBaFBItrKwWQXXVNp-pQganssZOkoT0QuMu8jQ/exec';  // ← pegar URL aquí después de publicar el Apps Script

let pinGerente = null;

/* ─── Helpers de transporte ──────────────────────────────── */

// GET: para validar_candidato y obtener_pin (sin preflight CORS)
async function getWebApp(params) {
  const qs  = Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  const res = await fetch(`${WEB_APP_URL}?${qs}`);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

// POST: solo para guardar_resultados (payload grande, preflight aceptable)
async function postWebApp(payload) {
  const res = await fetch(WEB_APP_URL, {
    method: 'POST',
    body:   JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

/* ─── Acción 1: verificar candidato ─────────────────────── */
async function verificarCandidato(celular) {
  if (!WEB_APP_URL) {
    return {
      status:    'ok',
      nombre:    'Demo',
      apellidos: 'Candidato',
      puesto:    'Mesero',
      sucursal:  'Carso',
      nivel:     'operativo',
    };
  }
  try {
    return await getWebApp({ accion: 'validar_candidato', celular });
  } catch {
    return { status: 'error', mensaje: 'Sin conexión. Intenta de nuevo.' };
  }
}

/* ─── Acción 2: obtener PIN del gerente ─────────────────── */
async function fetchPin() {
  pinGerente = null;
  if (!WEB_APP_URL || !session.sucursal) {
    pinGerente = '9999';
    return;
  }
  try {
    const data = await getWebApp({ accion: 'obtener_pin', sucursal: session.sucursal });
    pinGerente = data.status === 'ok' ? String(data.pin) : '9999';
  } catch {
    pinGerente = '9999';
    console.warn('fetchPin: fallo de red — PIN de respaldo activo');
  }
}

/* ─── Acción 3: enviar resultados y calificar ────────────── */
async function enviarResultados() {
  const zavicData = session.respuestas_zavic || [];
  const discData  = session.respuestas_disc  || [];

  // BIG5: [{num, valor, tiempo}] → array de 60 valores en orden
  let big5Vals = null;
  if (Array.isArray(session.respuestas_big5) && session.respuestas_big5.length === 60) {
    big5Vals = [...session.respuestas_big5]
      .sort((a, b) => a.num - b.num)
      .map(r => r.valor || 3);
  }

  const payload = {
    accion:           'guardar_resultados',
    celular:          session.candidatoId,
    resultados_zavic: zavicData,
    resultados_disc:  discData,
    resultados_big5:  big5Vals,
  };

  if (!WEB_APP_URL) {
    session.veredictoFinal = 'CONTINÚA';
    goTo(SCREENS.CIERRE_CANDIDATO);
    return;
  }

  for (let intento = 0; intento < 2; intento++) {
    try {
      const data = await postWebApp(payload);
      if (data.status === 'ok') {
        session.veredictoFinal = data.mensaje_gerente === 'CONTINÚA AL PROCESO'
          ? 'CONTINÚA'
          : 'PROCESO TERMINADO';
        session.score_psico = data.score_psicometria;
        goTo(SCREENS.CIERRE_CANDIDATO);
        return;
      }
    } catch {
      if (intento === 0) await sleep(1500);
    }
  }

  // Ambos intentos fallaron — mostrar cierre sin bloquear al candidato
  console.warn('enviarResultados: sync fallida — marcando pendingSync');
  session.pendingSync    = true;
  session.veredictoFinal = 'CONTINÚA';
  goTo(SCREENS.CIERRE_CANDIDATO);
}
