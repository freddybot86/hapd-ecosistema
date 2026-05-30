/* ═══════════════════════════════════════════════════════════
   BLOQUE 2 — DISC
   ═══════════════════════════════════════════════════════════ */

let dItems   = null;
let dIdx     = 0;
let dMas     = null;
let dMenos   = null;
let dTimerID = null;
let dSeg     = 0;

/* ─── Arranque: muestra la intro + práctica ─────────────── */
function initDisc() {
  dItems = DISC_GRUPOS;
  session.respuestas_disc = [];

  /* -- Práctica interactiva (no guarda nada) -------------- */
  let pMas = null, pMenos = null;

  function pRender() {
    ['mas', 'menos'].forEach(tipo => {
      const sel    = tipo === 'mas' ? pMas   : pMenos;
      const contra = tipo === 'mas' ? pMenos : pMas;
      document.getElementById(`practica-disc-${tipo}`)
        .querySelectorAll('.selector-pill').forEach(pill => {
          const l = pill.dataset.letra;
          pill.disabled = (l === contra);
          pill.classList.toggle(`pill-${tipo}`, l === sel);
        });
    });
    document.querySelectorAll('#practica-disc-opciones .opcion-card').forEach(c => {
      c.classList.remove('state-mas', 'state-menos');
      if (c.dataset.letra === pMas)   c.classList.add('state-mas');
      if (c.dataset.letra === pMenos) c.classList.add('state-menos');
    });
  }

  document.getElementById('practica-disc-mas').addEventListener('click', e => {
    const p = e.target.closest('.selector-pill');
    if (!p || p.disabled) return;
    pMas = p.dataset.letra;
    pRender();
  });

  document.getElementById('practica-disc-menos').addEventListener('click', e => {
    const p = e.target.closest('.selector-pill');
    if (!p || p.disabled) return;
    pMenos = p.dataset.letra;
    pRender();
  });

  document.getElementById('btn-comenzar-disc')
    .addEventListener('click', dStartBloque);
}

/* ─── Inicia los grupos reales ──────────────────────────── */
function dStartBloque() {
  document.getElementById('disc-intro').hidden  = true;
  document.getElementById('disc-header').hidden = false;
  document.getElementById('disc-body').hidden   = false;

  /* Event delegation en contenedores — sobreviven al innerHTML = '' */
  document.getElementById('disc-mas-pills').addEventListener('click', e => {
    const p = e.target.closest('.selector-pill');
    if (!p || p.disabled) return;
    dMas = p.dataset.letra;
    dRenderPills();
  });

  document.getElementById('disc-menos-pills').addEventListener('click', e => {
    const p = e.target.closest('.selector-pill');
    if (!p || p.disabled) return;
    dMenos = p.dataset.letra;
    dRenderPills();
  });

  document.getElementById('disc-btn-siguiente')
    .addEventListener('click', () => dGuardarYAvanzar(false));

  dIdx = 0;
  dMostrarGrupo(0);
}

/* ─── Renderizar grupo ──────────────────────────────────── */
function dMostrarGrupo(idx) {
  const item  = dItems[idx];
  const total = dItems.length;

  dMas   = null;
  dMenos = null;
  dSeg   = 0;
  dDetenerTimer();

  // Header
  document.getElementById('disc-progreso-texto').textContent =
    `Grupo ${idx + 1} de ${total}`;
  document.getElementById('disc-progress-fill').style.width =
    `${(idx / total) * 100}%`;

  // Etiqueta de grupo
  document.getElementById('disc-grupo-num').textContent = `Grupo ${idx + 1}`;

  // Tarjetas de opciones
  const grid = document.getElementById('disc-opciones-grid');
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
  dRenderPills();

  // Texto del botón
  document.getElementById('disc-btn-siguiente').textContent =
    idx === total - 1 ? 'Finalizar bloque' : 'Siguiente';

  document.getElementById('disc-body').scrollTop = 0;
  dIniciarTimer();
}

/* ─── Render de pills + habilitar botón ─────────────────── */
function dRenderPills() {
  const letras = Object.keys(dItems[dIdx].opciones);

  ['mas', 'menos'].forEach(tipo => {
    const container = document.getElementById(`disc-${tipo}-pills`);
    container.innerHTML = '';

    letras.forEach(letra => {
      const pill = document.createElement('button');
      pill.className     = 'selector-pill';
      pill.textContent   = letra;
      pill.dataset.letra = letra;

      const contra = tipo === 'mas' ? dMenos : dMas;
      if (letra === contra) pill.disabled = true;

      const actual = tipo === 'mas' ? dMas : dMenos;
      if (letra === actual) pill.classList.add(`pill-${tipo}`);

      container.appendChild(pill);
    });
  });

  // Estado visual de tarjetas
  document.querySelectorAll('#disc-opciones-grid .opcion-card').forEach(card => {
    card.classList.remove('state-mas', 'state-menos');
    if (card.dataset.letra === dMas)   card.classList.add('state-mas');
    if (card.dataset.letra === dMenos) card.classList.add('state-menos');
  });

  // Habilitar Siguiente en cuanto ambos estén seleccionados
  document.getElementById('disc-btn-siguiente').disabled = !(dMas && dMenos);
}

/* ─── Contador (35 s por grupo) ─────────────────────────── */
function dIniciarTimer() {
  const el = document.getElementById('disc-counter');
  el.textContent = '00:00';
  el.classList.remove('counter-alerta');

  dTimerID = setInterval(() => {
    dSeg++;
    const mm = String(Math.floor(dSeg / 60)).padStart(2, '0');
    const ss = String(dSeg % 60).padStart(2, '0');
    el.textContent = `${mm}:${ss}`;

    if (dSeg === 25) el.classList.add('counter-alerta');

    if (dSeg >= 35) {
      dDetenerTimer();
      dGuardarYAvanzar(true);
    }
  }, 1000);
}

function dDetenerTimer() {
  clearInterval(dTimerID);
  dTimerID = null;
}

/* ─── Guardar y avanzar ─────────────────────────────────── */
function dGuardarYAvanzar(autoavance) {
  dDetenerTimer();

  session.respuestas_disc.push({
    id:         dItems[dIdx].id,
    mas:        dMas,
    menos:      dMenos,
    tiempo:     dSeg,
    autoavance: autoavance,
  });

  if (dIdx < dItems.length - 1) {
    dIdx++;
    dMostrarGrupo(dIdx);
  } else {
    if (session.nivel === 'gerencial') {
      goTo(SCREENS.TRANSICION_B3);
    } else {
      goTo(SCREENS.PROCESANDO);
    }
  }
}
