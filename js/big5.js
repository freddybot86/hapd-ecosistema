/* ═══════════════════════════════════════════════════════════
   BLOQUE 3 — BIG FIVE (BIG5-GJ v1.0)
   === SOLO PARA CANDIDATOS NIVEL GERENCIAL ===
   Escala Likert 1-5. 60 ítems. ~15 minutos.
   Auto-avance al seleccionar. Timer de 30s por ítem.
   ═══════════════════════════════════════════════════════════ */

let b5Items   = null;
let b5Idx     = 0;
let b5TimerID = null;
let b5Seg     = 0;
let b5Valor   = null;   // valor Likert seleccionado en el ítem actual (1-5)

const B5_LABELS = {
  1: 'Muy en\ndesacuerdo',
  2: 'En\ndesacuerdo',
  3: 'Neutral',
  4: 'De\nacuerdo',
  5: 'Muy de\nacuerdo',
};

/* ─── Arranque ──────────────────────────────────────────── */
function initBig5() {
  b5Items             = BIG5_ITEMS;
  b5Idx               = 0;
  b5Valor             = null;
  session.respuestas_big5 = [];

  document.getElementById('big5-header').hidden = false;
  document.getElementById('big5-body').hidden   = false;

  /* Event delegation en los botones Likert */
  const escala = document.getElementById('big5-escala');
  escala.addEventListener('click', e => {
    const btn = e.target.closest('.b5-btn');
    if (!btn) return;
    b5Valor = parseInt(btn.dataset.valor, 10);
    b5RenderEscala();

    /* Auto-avance con pequeño delay para que el candidato vea su selección */
    setTimeout(() => b5GuardarYAvanzar(false), 350);
  });

  b5MostrarItem(0);
}

/* ─── Mostrar ítem ──────────────────────────────────────── */
function b5MostrarItem(idx) {
  const item  = b5Items[idx];
  const total = b5Items.length;

  b5Valor = null;
  b5Seg   = 0;
  b5DetenerTimer();

  /* Header */
  document.getElementById('big5-progreso-texto').textContent =
    `Pregunta ${idx + 1} de ${total}`;
  document.getElementById('big5-progress-fill').style.width =
    `${(idx / total) * 100}%`;

  /* Numeración discreta */
  document.getElementById('big5-item-num').textContent = `${idx + 1}`;

  /* Texto del ítem */
  document.getElementById('big5-item-texto').textContent = item.texto;

  /* Resetear escala */
  b5RenderEscala();

  /* Scroll al inicio */
  document.getElementById('big5-body').scrollTop = 0;

  b5IniciarTimer();
}

/* ─── Render de la escala Likert ─────────────────────────── */
function b5RenderEscala() {
  const escala = document.getElementById('big5-escala');
  escala.innerHTML = '';

  for (let v = 1; v <= 5; v++) {
    const btn = document.createElement('button');
    btn.className    = 'b5-btn';
    btn.dataset.valor = v;

    /* Estado visual: seleccionado */
    if (v === b5Valor) btn.classList.add('b5-btn--selected');

    /* Número grande */
    const num = document.createElement('span');
    num.className   = 'b5-num';
    num.textContent = v;

    /* Etiqueta pequeña */
    const lbl = document.createElement('span');
    lbl.className   = 'b5-label';
    lbl.textContent = B5_LABELS[v];

    btn.appendChild(num);
    btn.appendChild(lbl);
    escala.appendChild(btn);
  }
}

/* ─── Timer (30s por ítem) ───────────────────────────────── */
function b5IniciarTimer() {
  const el = document.getElementById('big5-counter');
  el.textContent = '00:00';
  el.classList.remove('counter-alerta');

  b5TimerID = setInterval(() => {
    b5Seg++;
    const mm = String(Math.floor(b5Seg / 60)).padStart(2, '0');
    const ss = String(b5Seg % 60).padStart(2, '0');
    el.textContent = `${mm}:${ss}`;

    if (b5Seg === 22) el.classList.add('counter-alerta');

    if (b5Seg >= 30) {
      b5DetenerTimer();
      /* Si no seleccionó nada en 30s → guardar valor 3 (neutral) y avanzar */
      if (b5Valor === null) b5Valor = 3;
      b5GuardarYAvanzar(true);
    }
  }, 1000);
}

function b5DetenerTimer() {
  clearInterval(b5TimerID);
  b5TimerID = null;
}

/* ─── Guardar y avanzar ─────────────────────────────────── */
function b5GuardarYAvanzar(autoavance) {
  b5DetenerTimer();

  session.respuestas_big5.push({
    num:        b5Items[b5Idx].num,
    valor:      b5Valor ?? 3,
    tiempo:     b5Seg,
    autoavance: autoavance,
  });

  if (b5Idx < b5Items.length - 1) {
    b5Idx++;
    b5MostrarItem(b5Idx);
  } else {
    /* Bloque 3 terminado → enviar resultados */
    goTo(SCREENS.PROCESANDO);
  }
}
