/* ═══════════════════════════════════════════════════════════
   BLOQUE 1 — ZAVIC
   === BLOQUE 1 — NO MODIFICAR ===
   Todo lo que está en este archivo controla la lógica completa
   del Bloque 1 (ZAVIC). Está probado y funciona correctamente.
   No cambiar timers, event delegation, zRenderPills ni el flujo
   de guardado sin revisar primero el estado de las pruebas.
   ═══════════════════════════════════════════════════════════ */

let zItems   = null;
let zIdx     = 0;
let zMas     = null;
let zMenos   = null;
let zTimerID = null;
let zSeg     = 0;

/* ─── Arranque: muestra la intro + práctica ─────────────── */
function initZavic() {
  zItems = ZAVIC_ITEMS;
  session.respuestas_zavic = [];

  /* -- Práctica interactiva (no guarda nada) -------------- */
  let pMas = null, pMenos = null;

  function pRender() {
    ['mas', 'menos'].forEach(tipo => {
      const sel    = tipo === 'mas' ? pMas   : pMenos;
      const contra = tipo === 'mas' ? pMenos : pMas;
      document.getElementById(`practica-${tipo}`)
        .querySelectorAll('.selector-pill').forEach(pill => {
          const l = pill.dataset.letra;
          pill.disabled = (l === contra);
          pill.classList.toggle(`pill-${tipo}`, l === sel);
        });
    });
    document.querySelectorAll('#practica-opciones .opcion-card').forEach(c => {
      c.classList.remove('state-mas', 'state-menos');
      if (c.dataset.letra === pMas)   c.classList.add('state-mas');
      if (c.dataset.letra === pMenos) c.classList.add('state-menos');
    });
  }

  document.getElementById('practica-mas').addEventListener('click', e => {
    const p = e.target.closest('.selector-pill');
    if (!p || p.disabled) return;
    pMas = p.dataset.letra;
    pRender();
  });

  document.getElementById('practica-menos').addEventListener('click', e => {
    const p = e.target.closest('.selector-pill');
    if (!p || p.disabled) return;
    pMenos = p.dataset.letra;
    pRender();
  });

  document.getElementById('btn-comenzar-bloque')
    .addEventListener('click', zStartBloque);
}

/* ─── Inicia las preguntas reales ───────────────────────── */
function zStartBloque() {
  document.getElementById('zavic-intro').hidden  = true;
  document.getElementById('zavic-header').hidden = false;
  document.getElementById('zavic-body').hidden   = false;

  /* Event delegation: los listeners viven en los contenedores,
     no en las pills individuales (que se recrean cada pregunta) */
  document.getElementById('mas-pills').addEventListener('click', e => {
    const p = e.target.closest('.selector-pill');
    if (!p || p.disabled) return;
    zMas = p.dataset.letra;
    zRenderPills();
  });

  document.getElementById('menos-pills').addEventListener('click', e => {
    const p = e.target.closest('.selector-pill');
    if (!p || p.disabled) return;
    zMenos = p.dataset.letra;
    zRenderPills();
  });

  document.getElementById('btn-siguiente')
    .addEventListener('click', () => zGuardarYAvanzar(false));

  zIdx = 0;
  zMostrarPregunta(0);
}

/* ─── Renderizar pregunta ───────────────────────────────── */
function zMostrarPregunta(idx) {
  const item  = zItems[idx];
  const total = zItems.length;

  zMas   = null;
  zMenos = null;
  zSeg   = 0;
  zDetenerTimer();

  // Header
  document.getElementById('pruebas-progreso-texto').textContent =
    `Pregunta ${idx + 1} de ${total}`;
  document.getElementById('pruebas-progress-fill').style.width =
    `${(idx / total) * 100}%`;

  // Situación
  document.getElementById('pruebas-situacion-num').textContent  = `Situación ${idx + 1}`;
  document.getElementById('pruebas-situacion-texto').textContent = item.situacion;

  // Tarjetas de opciones
  const grid = document.getElementById('opciones-grid');
  grid.innerHTML = '';
  Object.keys(item.opciones).forEach(letra => {
    const card = document.createElement('div');
    card.className     = 'opcion-card';
    card.dataset.letra = letra;
    card.innerHTML =
      `<span class="opcion-letra">${letra}</span>` +
      `<span class="opcion-texto">${item.opciones[letra].texto}</span>`;
    grid.appendChild(card);
  });

  // Pills + estado inicial del botón
  zRenderPills();

  // Texto del botón (no toca disabled — lo maneja zRenderPills)
  document.getElementById('btn-siguiente').textContent =
    idx === total - 1 ? 'Finalizar bloque' : 'Siguiente';

  document.getElementById('zavic-body').scrollTop = 0;
  zIniciarTimer();
}

/* ─── Render de pills + habilitar botón ─────────────────── */
function zRenderPills() {
  const letras = Object.keys(zItems[zIdx].opciones);

  ['mas', 'menos'].forEach(tipo => {
    const container = document.getElementById(`${tipo}-pills`);
    container.innerHTML = '';

    letras.forEach(letra => {
      const pill = document.createElement('button');
      pill.className     = 'selector-pill';
      pill.textContent   = letra;
      pill.dataset.letra = letra;

      const contra = tipo === 'mas' ? zMenos : zMas;
      if (letra === contra) pill.disabled = true;

      const actual = tipo === 'mas' ? zMas : zMenos;
      if (letra === actual) pill.classList.add(`pill-${tipo}`);

      container.appendChild(pill);
    });
  });

  // Estado visual de tarjetas
  document.querySelectorAll('#opciones-grid .opcion-card').forEach(card => {
    card.classList.remove('state-mas', 'state-menos');
    if (card.dataset.letra === zMas)   card.classList.add('state-mas');
    if (card.dataset.letra === zMenos) card.classList.add('state-menos');
  });

  // Habilitar Siguiente en cuanto ambos estén seleccionados
  document.getElementById('btn-siguiente').disabled = !(zMas && zMenos);
}

/* ─── Contador (60 s por pregunta) ──────────────────────── */
function zIniciarTimer() {
  const el = document.getElementById('pruebas-counter');
  el.textContent = '00:00';
  el.classList.remove('counter-alerta');

  zTimerID = setInterval(() => {
    zSeg++;
    const mm = String(Math.floor(zSeg / 60)).padStart(2, '0');
    const ss = String(zSeg % 60).padStart(2, '0');
    el.textContent = `${mm}:${ss}`;

    if (zSeg === 45) el.classList.add('counter-alerta');  // aviso visual

    if (zSeg >= 60) {
      zDetenerTimer();
      zGuardarYAvanzar(true);  // auto-avance por agotamiento de tiempo
    }
  }, 1000);
}

function zDetenerTimer() {
  clearInterval(zTimerID);
  zTimerID = null;
}

/* ─── Guardar y avanzar ─────────────────────────────────── */
function zGuardarYAvanzar(autoavance) {
  zDetenerTimer();

  session.respuestas_zavic.push({
    id:         zItems[zIdx].id,
    mas:        zMas,
    menos:      zMenos,
    tiempo:     zSeg,
    autoavance: autoavance,
  });

  if (zIdx < zItems.length - 1) {
    zIdx++;
    zMostrarPregunta(zIdx);
  } else {
    goTo(SCREENS.TRANSICION);
  }
}
