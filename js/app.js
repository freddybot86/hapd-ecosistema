/* ═══════════════════════════════════════════════════════════
   GastroJobs Psico — Core
   ═══════════════════════════════════════════════════════════ */

const SCREENS = {
  LOGIN:            'screen-login',
  INSTRUCCIONES:    'screen-instrucciones',
  PRUEBAS:          'screen-pruebas',
  TRANSICION:       'screen-transicion',
  DISC:             'screen-disc',
  TRANSICION_B3:    'screen-transicion-b3',
  PROCESANDO:       'screen-procesando',
  CIERRE_CANDIDATO: 'screen-cierre-candidato',
  CIERRE_GERENTE:   'screen-cierre-gerente',
};

const session = {
  candidatoId:    null,
  nombre:         null,
  puesto:         null,
  sucursal:       null,
  nivel:          null,   // 'operativo' | 'gerencial'
  pruebas:        [],
  resultados:     {},
  veredictoFinal: 'CONTINÚA',
};

function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');

  if (screenId === SCREENS.PROCESANDO)       enviarResultados();
  if (screenId === SCREENS.CIERRE_CANDIDATO) { renderCierreCandidato(); fetchPin(); }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ═══════════════════════════════════════════════════════════
   PANTALLA 1 — LOGIN
   ═══════════════════════════════════════════════════════════ */

function initLogin() {
  const celularInput = document.getElementById('input-celular');
  const nombreInput  = document.getElementById('input-nombre');
  const btnVerificar = document.getElementById('btn-verificar');
  const btnContinuar = document.getElementById('btn-continuar');
  const feedback     = document.getElementById('login-feedback');

  function resetFeedback() {
    feedback.textContent = '';
    feedback.className   = 'login-feedback';
    btnContinuar.hidden  = true;
  }

  function validateForm() {
    const celular  = celularInput.value;
    const palabras = nombreInput.value.trim().split(/\s+/).filter(Boolean);
    btnVerificar.disabled = !(/^\d{10}$/.test(celular) && palabras.length >= 2);
  }

  celularInput.addEventListener('input', e => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    resetFeedback();
    validateForm();
  });

  nombreInput.addEventListener('input', () => {
    resetFeedback();
    validateForm();
  });

  btnVerificar.addEventListener('click', async () => {
    const celular = celularInput.value;

    btnVerificar.disabled = true;
    btnVerificar.innerHTML = '<span class="btn-spinner"></span>Verificando…';
    resetFeedback();

    const data = await verificarCandidato(celular);

    btnVerificar.innerHTML = 'Verificar';

    if (data.status === 'ok') {
      feedback.textContent = '✅ Registro encontrado';
      feedback.className   = 'login-feedback success';
      btnContinuar.hidden  = false;
      session.candidatoId  = celular;
      session.nombre       = [data.nombre, data.apellidos].filter(Boolean).join(' ');
      session.puesto       = data.puesto;
      session.sucursal     = data.sucursal;
      session.nivel        = data.nivel;
    } else if (data.status === 'no_encontrado') {
      feedback.textContent = 'Este número no está en nuestro sistema. Verifica que sea el mismo con el que platicaste con Freddy, o escríbenos al WhatsApp 56 4871 3095.';
      feedback.className   = 'login-feedback error';
      validateForm();
    } else {
      feedback.textContent = data.mensaje || 'Error de conexión, intenta de nuevo.';
      feedback.className   = 'login-feedback error';
      validateForm();
    }
  });

  btnContinuar.addEventListener('click', () => {
    goTo(SCREENS.INSTRUCCIONES);
  });
}

/* ═══════════════════════════════════════════════════════════
   PANTALLA 2 — INSTRUCCIONES
   ═══════════════════════════════════════════════════════════ */

function renderInstrucciones() {
  const esGerencial = session.nivel === 'gerencial';

  // Saludo personalizado
  const primerNombre = (session.nombre || '').split(' ')[0];
  document.getElementById('instr-saludo').textContent = `Hola, ${primerNombre}`;

  // Bloque 3 solo para gerenciales
  document.getElementById('block-personalidad').hidden = !esGerencial;

  // Tiempo total dinámico
  document.getElementById('instr-tiempo').textContent =
    `Tiempo total estimado: ~${esGerencial ? '32' : '17'} minutos`;

  // Barra de progreso: 2 o 3 segmentos vacíos
  const progressEl = document.getElementById('instr-progress');
  progressEl.innerHTML = '';
  const total = esGerencial ? 3 : 2;
  for (let i = 0; i < total; i++) {
    const seg = document.createElement('div');
    seg.className = 'progress-seg';
    progressEl.appendChild(seg);
  }
}

function initInstrucciones() {
  const checkbox    = document.getElementById('checkbox-acepto');
  const btnComenzar = document.getElementById('btn-comenzar');

  renderInstrucciones();

  checkbox.addEventListener('change', () => {
    btnComenzar.disabled = !checkbox.checked;
  });

  btnComenzar.addEventListener('click', () => {
    goTo(SCREENS.PRUEBAS);
    initZavic();  // síncrono — usa ZAVIC_ITEMS embebido
  });
}

/* ═══════════════════════════════════════════════════════════
   PANTALLA 4 — CIERRE CANDIDATO
   ═══════════════════════════════════════════════════════════ */

/* PINes leídos dinámicamente desde 2_Tiendas vía backend.js → fetchPin()
   El fallback universal '9999' se activa si la conexión falla. */

function renderCierreCandidato() {
  const primerNombre = (session.nombre || '').split(' ')[0];
  document.getElementById('cierre-nombre').textContent = primerNombre;
}

function initCierreCandidato() {
  const btnAcceso   = document.getElementById('btn-acceso-gerente');
  const pinPanel    = document.getElementById('gerente-pin-panel');
  const pinInput    = document.getElementById('gerente-pin-input');
  const btnValidar  = document.getElementById('btn-validar-pin');
  const pinFeedback = document.getElementById('gerente-pin-feedback');

  let intentos = 0;
  const MAX_INTENTOS = 3;

  btnAcceso.addEventListener('click', () => {
    intentos = 0;  // resetear contador en cada acceso
    btnAcceso.hidden = true;
    pinPanel.hidden  = false;
    pinInput.focus();
  });

  pinInput.addEventListener('input', () => {
    pinInput.value    = pinInput.value.replace(/\D/g, '').slice(0, 4);
    btnValidar.disabled = pinInput.value.length < 4;
    pinFeedback.textContent = '';
  });

  btnValidar.addEventListener('click', () => {
    const pin = pinInput.value;

    const pinValido = pinGerente || '9999';
    if (pin === pinValido) {
      initCierreGerente(session.veredictoFinal, session.nombre);
      goTo(SCREENS.CIERRE_GERENTE);
    } else {
      intentos++;
      pinInput.value = '';
      btnValidar.disabled = true;

      if (intentos >= MAX_INTENTOS) {
        pinFeedback.textContent = 'Demasiados intentos. Contacta a tu supervisor.';
        pinInput.disabled  = true;
        btnValidar.disabled = true;
      } else {
        pinFeedback.textContent =
          `PIN incorrecto. ${MAX_INTENTOS - intentos} intento${MAX_INTENTOS - intentos === 1 ? '' : 's'} restante${MAX_INTENTOS - intentos === 1 ? '' : 's'}.`;
      }
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   PANTALLA 5 — CIERRE GERENTE
   ═══════════════════════════════════════════════════════════ */

function initCierreGerente(veredicto, nombre) {
  const resultado   = document.getElementById('gerente-resultado');
  const icono       = document.getElementById('gerente-resultado-icono');
  const textoVeredicto = document.getElementById('gerente-resultado-veredicto');
  const textoNombre = document.getElementById('gerente-resultado-nombre');

  const esContinua = veredicto === 'CONTINÚA';

  resultado.classList.remove('continua', 'terminado');
  resultado.classList.add(esContinua ? 'continua' : 'terminado');

  icono.textContent           = esContinua ? '✓' : '✗';
  textoVeredicto.textContent  = esContinua ? 'Continúa al proceso' : 'Proceso terminado';
  textoNombre.textContent     = nombre || '';
}

function resetApp() {
  // Reinicia sesión completa
  session.candidatoId    = null;
  session.nombre         = null;
  session.puesto         = null;
  session.nivel          = null;
  session.pruebas        = [];
  session.resultados     = {};
  session.veredictoFinal = 'CONTINÚA';
  if ('respuestas_zavic' in session) delete session.respuestas_zavic;
  if ('respuestas_disc'  in session) delete session.respuestas_disc;
  if ('respuestas_big5'  in session) delete session.respuestas_big5;
  if ('score_psico'      in session) delete session.score_psico;
  if ('pendingSync'      in session) delete session.pendingSync;
  session.sucursal = null;
  if (typeof pinGerente !== 'undefined') pinGerente = null;

  // Reinicia login
  document.getElementById('input-celular').value    = '';
  document.getElementById('input-nombre').value     = '';
  document.getElementById('btn-verificar').disabled = true;
  document.getElementById('btn-continuar').hidden   = true;
  document.getElementById('login-feedback').textContent = '';
  document.getElementById('login-feedback').className   = 'login-feedback';

  // Reinicia instrucciones
  document.getElementById('checkbox-acepto').checked = false;
  document.getElementById('btn-comenzar').disabled   = true;

  // Reinicia PIN panel para el siguiente uso
  const pinPanel    = document.getElementById('gerente-pin-panel');
  const pinInput    = document.getElementById('gerente-pin-input');
  const btnValidar  = document.getElementById('btn-validar-pin');
  const btnAcceso   = document.getElementById('btn-acceso-gerente');
  const pinFeedback = document.getElementById('gerente-pin-feedback');
  pinPanel.hidden         = true;
  btnAcceso.hidden        = false;
  pinInput.value          = '';
  pinInput.disabled       = false;
  btnValidar.disabled     = true;
  pinFeedback.textContent = '';

  goTo(SCREENS.LOGIN);
}

/* ─── Arranque ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  goTo(SCREENS.LOGIN);
  initLogin();
  initInstrucciones();
  initCierreCandidato();

  document.getElementById('btn-continuar-bloque2').addEventListener('click', () => {
    goTo(SCREENS.DISC);
    initDisc();
  });

  document.getElementById('btn-continuar-bloque3').addEventListener('click', () => {
    // TODO: initBigFive();
    goTo(SCREENS.PROCESANDO);
  });

  document.getElementById('btn-nueva-evaluacion').addEventListener('click', resetApp);
});
