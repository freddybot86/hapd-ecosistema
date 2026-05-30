// ============================================================
// GastroJobs_WebApp_Psico — Apps Script Web App
// The Hap&D Co. / GastroJobs — Confidencial
//
// INSTRUCCIONES DE DESPLIEGUE:
//   1. Abrir DataMaestro en Google Sheets
//   2. Extensiones → Apps Script
//   3. Nombre del proyecto: GastroJobs_WebApp_Psico
//   4. Pegar este código completo (reemplazar el contenido existente)
//   5. Guardar (Ctrl+S)
//   6. Implementar → Nueva implementación
//      - Tipo: Aplicación web
//      - Ejecutar como: Yo (cuenta con acceso al Sheets)
//      - Acceso: Cualquier persona
//   7. Autorizar cuando lo pida
//   8. Copiar la URL generada → pegarla en js/backend.js → WEB_APP_URL
//
// NOTA CORS: ContentService con MimeType.JSON funciona desde GitHub Pages
// cuando el acceso es "Cualquier persona". Si hay errores de preflight,
// ver la nota en js/backend.js.
// ============================================================
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxSrqekKxbqkzDJrZeCTLwzB7gS7iLBaFBItrKwWQXXVNp-pQganssZOkoT0QuMu8jQ/exec';
var SPREADSHEET_ID  = '1n80iszpKLOkPit-mXruOu68AkLnz-T5nUWOE7CQdHtg';
var MAESTRO_ID      = '1oqpEQRoeqnxS2Cr1TXl07xyIjY_HhoQNOR7vU2mFX6g';
var HOJA_CANDIDATOS = '9_Cartera_Candidatos';
var HOJA_TIENDAS    = '2_Tiendas';

var PUESTOS_GERENCIALES = [
  'gerente general', 'gg', 'chef ejecutivo', 'sous chef', 'gerente de servicio'
];

// ── Router ───────────────────────────────────────────────────

function doGet(e) {
  var accion = e.parameter && e.parameter.accion;
  var res;

  if      (accion === 'validar_candidato') res = validarCandidato(e.parameter.celular);
  else if (accion === 'obtener_pin')       res = obtenerPin(e.parameter.sucursal);
  else res = { status: 'ok', msg: 'GastroJobs WebApp Psico activa' };

  return ContentService
    .createTextOutput(JSON.stringify(res))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var body   = JSON.parse(e.postData.contents);
    var accion = body.accion;
    var res;

    if      (accion === 'validar_candidato')  res = validarCandidato(body.celular);
    else if (accion === 'obtener_pin')        res = obtenerPin(body.sucursal);
    else if (accion === 'guardar_resultados') res = guardarResultados(body);
    else res = { status: 'error', mensaje: 'Accion no reconocida: ' + accion };

    return ContentService
      .createTextOutput(JSON.stringify(res))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', mensaje: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Acción 1: validar_candidato ──────────────────────────────

function validarCandidato(celular) {
  if (!celular) return { status: 'error', mensaje: 'Celular requerido' };

  var ss   = SpreadsheetApp.openById(SPREADSHEET_ID);
  var hoja = ss.getSheetByName(HOJA_CANDIDATOS);
  if (!hoja) return { status: 'error', mensaje: 'Hoja no encontrada: ' + HOJA_CANDIDATOS };

  var datos   = hoja.getDataRange().getValues();
  var headers = datos[0].map(function(h) { return String(h).trim(); });

  var iCel = headers.indexOf('Celular');
  if (iCel === -1) iCel = headers.indexOf('ID_Candidato');
  if (iCel === -1) return { status: 'error', mensaje: 'Columna Celular no encontrada' };

  var iNom = headers.indexOf('Nombre');
  var iApe = headers.indexOf('Apellidos');
  var iPue = headers.indexOf('Puesto_Aplicado');
  var iSuc = headers.indexOf('Sucursal');

  var celStr = String(celular).trim();

  for (var i = 1; i < datos.length; i++) {
    if (String(datos[i][iCel]).trim() !== celStr) continue;

    var puesto = iPue !== -1 ? String(datos[i][iPue] || '').trim() : '';
    return {
      status:    'ok',
      nombre:    iNom !== -1 ? String(datos[i][iNom] || '').trim() : '',
      apellidos: iApe !== -1 ? String(datos[i][iApe] || '').trim() : '',
      puesto:    puesto,
      sucursal:  iSuc !== -1 ? String(datos[i][iSuc] || '').trim() : '',
      nivel:     esGerencial(puesto) ? 'gerencial' : 'operativo'
    };
  }
  return { status: 'no_encontrado' };
}

function esGerencial(puesto) {
  return PUESTOS_GERENCIALES.indexOf(puesto.toLowerCase().trim()) !== -1;
}

// ── Acción 2: obtener_pin ────────────────────────────────────

function obtenerPin(sucursal) {
  if (!sucursal) return { status: 'error', mensaje: 'Sucursal requerida' };

  var ss   = SpreadsheetApp.openById(SPREADSHEET_ID);
  var hoja = ss.getSheetByName(HOJA_TIENDAS);
  if (!hoja) return { status: 'error', mensaje: 'Hoja no encontrada: ' + HOJA_TIENDAS };

  var datos   = hoja.getDataRange().getValues();
  var headers = datos[0].map(function(h) { return String(h).trim(); });

  var iSuc = headers.indexOf('Sucursal');
  var iPin = headers.indexOf('PIN');
  if (iSuc === -1 || iPin === -1) {
    return { status: 'error', mensaje: 'Columnas Sucursal o PIN no encontradas en 2_Tiendas' };
  }

  var sucStr = String(sucursal).trim().toLowerCase();
  for (var i = 1; i < datos.length; i++) {
    if (String(datos[i][iSuc]).trim().toLowerCase() === sucStr) {
      return { status: 'ok', pin: String(datos[i][iPin]).trim() };
    }
  }
  return { status: 'no_encontrado' };
}

// ── Acción 3: guardar_resultados ─────────────────────────────

function guardarResultados(body) {
  var celular   = String(body.celular   || '').trim();
  var zavicData = body.resultados_zavic || [];
  var discData  = body.resultados_disc  || [];
  var big5Data  = body.resultados_big5  || null;

  var ss      = SpreadsheetApp.openById(SPREADSHEET_ID);
  var hoja    = ss.getSheetByName(HOJA_CANDIDATOS);
  var datos   = hoja.getDataRange().getValues();
  var headers = datos[0].map(function(h) { return String(h).trim(); });

  var iCel = headers.indexOf('Celular');
  if (iCel === -1) iCel = headers.indexOf('ID_Candidato');
  var iPue = headers.indexOf('Puesto_Aplicado');

  var filaIdx = -1, puesto = '';
  for (var i = 1; i < datos.length; i++) {
    if (String(datos[i][iCel]).trim() === celular) {
      filaIdx = i + 1;
      puesto  = iPue !== -1 ? String(datos[i][iPue] || '').trim() : '';
      break;
    }
  }
  if (filaIdx === -1) return { status: 'error', mensaje: 'Candidato no encontrado: ' + celular };

  var nivel = esGerencial(puesto) ? 'gerencial' : 'operativo';

  // Calificar
  var zavicRes = calcularZAVIC(zavicData);
  var discRes  = calcularDISC_GJ(convertirDiscMasmenosAColumnas(discData));
  var big5Res  = null;
  if (nivel === 'gerencial' && Array.isArray(big5Data) && big5Data.length === 60) {
    try { big5Res = calificarBIG5GJ(big5Data); } catch(e) { Logger.log('BIG5: ' + e); }
  }

  var scoreRes = calcularScorePsicometria(zavicRes, discRes, big5Res, puesto, nivel);

  // Escribir en Cartera y en Maestro
  escribirEnCartera(hoja, headers, filaIdx, zavicRes, discRes, big5Res, scoreRes);
  try { actualizarMaestro(celular, scoreRes); } catch(e) { Logger.log('Maestro: ' + e); }
  try { if (typeof recalcularScoreFinal === 'function') recalcularScoreFinal(celular); } catch(e) {}

  return {
    status:            'ok',
    veredicto:         scoreRes.veredicto,
    score_psicometria: scoreRes.score,
    alertas:           scoreRes.alertas,
    mensaje_gerente:   scoreRes.mensaje_gerente
  };
}

// ── Converter: MÁS/MENOS → columnas DISC ────────────────────
// La app recopila MÁS/MENOS (una selección por grupo).
// Se convierte a 4-3-2-1 asignando MÁS=4, MENOS=1, medios=3 y 2.
// La misma data se usa para las 3 columnas (aproximación para piloto).

function convertirDiscMasmenosAColumnas(respuestas) {
  var ops = ['A','B','C','D'];
  var col = respuestas.map(function(r) {
    var fila   = { grupo: r.id };
    var medios = ops.filter(function(o) { return o !== r.mas && o !== r.menos; });
    fila[r.mas]     = 4;
    fila[medios[0]] = 3;
    fila[medios[1]] = 2;
    fila[r.menos]   = 1;
    return fila;
  });
  return { columna_I: col, columna_II: col, columna_III: col };
}

// ── Score psicométrico ────────────────────────────────────────

function calcularScorePsicometria(zavic, disc, big5, puesto, nivel) {
  if (zavic.veredicto === 'DESCARTE') {
    return { score: 0, veredicto: 'DESCARTE', alertas: zavic.descartes, mensaje_gerente: 'PROCESO TERMINADO' };
  }

  var perfilNatural = disc['columna_II'].dominante;
  var score         = calcularFitDisc(perfilNatural, puesto);
  var alertas       = [].concat(zavic.alertas);
  var veredicto     = 'PASA';

  if (nivel === 'gerencial' && big5) {
    if (big5.puntajes.L >= 85) {
      return { score: 3.0, veredicto: 'PERFIL_NO_CONFIABLE',
        alertas: ['Escala L muy elevada'], mensaje_gerente: 'PROCESO TERMINADO' };
    }
    var b5avg = ['R','E','X','A','O'].reduce(function(a,d){ return a + big5.puntajes[d]; }, 0) / 5;
    score = (score + b5avg / 10) / 2;

    ['R','E','X','A','O'].forEach(function(d) {
      if (big5.veredictos[d] === 'DESCARTE') {
        alertas.push('BIG5 ' + d + ' DESCARTE: ' + big5.puntajes[d]);
        veredicto = 'DESCARTE';
      } else if (big5.veredictos[d] === 'ALERTA') {
        alertas.push('BIG5 ' + d + ' alerta: ' + big5.puntajes[d]);
      }
    });
    if (big5.veredictos.L === 'ALERTA') alertas.push('Escala L elevada: ' + big5.puntajes.L);
  }

  if (veredicto === 'DESCARTE') {
    return { score: 0, veredicto: 'DESCARTE', alertas: alertas, mensaje_gerente: 'PROCESO TERMINADO' };
  }

  var penStep = nivel === 'gerencial' ? 0.5 : 1.0;
  score = Math.max(0, Math.round((score - Math.min(alertas.length * penStep, 2.0)) * 10) / 10);
  veredicto = alertas.length > 0 ? 'PASA_CON_ALERTAS' : 'PASA';

  return { score: score, veredicto: veredicto, alertas: alertas, mensaje_gerente: 'CONTINÚA AL PROCESO' };
}

function calcularFitDisc(perfil, puesto) {
  var p = puesto.toLowerCase().trim();
  var tabla = {
    'gerente general':             { D:10, I:7,  S:4,  C:4  },
    'gg':                          { D:10, I:7,  S:4,  C:4  },
    'chef ejecutivo':              { D:10, I:7,  S:4,  C:4  },
    'gerente de servicio':         { I:10, D:7,  S:4,  C:4  },
    'mesero':                      { I:10, S:7,  D:4,  C:4  },
    'hostess':                     { I:10, S:7,  D:4,  C:4  },
    'sous chef':                   { C:10, S:7,  D:4,  I:4  },
    'ayudante de cocina':          { S:10, C:7,  D:4,  I:4  },
    'ayudante cocina':             { S:10, C:7,  D:4,  I:4  },
    'steward':                     { S:10, C:7,  D:4,  I:4  },
    'dish':                        { S:10, C:7,  D:4,  I:4  },
    'ayudante de barra':           { C:10, S:10, D:4,  I:4  },
    'ayudante barra':              { C:10, S:10, D:4,  I:4  },
    'pizzero':                     { D:10, C:10, I:4,  S:4  },
    'técnico de mantenimiento':    { C:10, S:7,  D:4,  I:4  },
    'tecnico mantenimiento':       { C:10, S:7,  D:4,  I:4  },
    'mantenimiento':               { C:10, S:7,  D:4,  I:4  },
  };
  var fits = tabla[p] || { D:7, I:7, S:7, C:7 };
  return fits[perfil] || 4;
}

// ── Escribir en 9_Cartera_Candidatos ─────────────────────────

function escribirEnCartera(hoja, headers, filaIdx, zavic, disc, big5, score) {
  var vals = {
    'Score_Psicometria': score.score,
    'Zavic_L':           zavic.puntajes.L,
    'Zavic_M':           zavic.puntajes.M,
    'Zavic_I':           zavic.puntajes.I,
    'Zavic_C':           zavic.puntajes.C,
    'Zavic_Veredicto':   zavic.veredicto,
    'Disc_Natural':      disc['columna_II'].dominante,
    'Disc_Presion':      disc['columna_III'].dominante,
    'Disc_Mascara':      disc['columna_I'].dominante,
    'Disc_Congruente':   disc.meta.congruente ? 'SI' : 'NO',
    'Psico_Veredicto':   score.veredicto,
    'Psico_Alertas':     score.alertas.join(' | '),
    'Fecha_Psico':       Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss')
  };
  if (big5) {
    vals['Big5_R'] = big5.puntajes.R;
    vals['Big5_E'] = big5.puntajes.E;
    vals['Big5_X'] = big5.puntajes.X;
    vals['Big5_A'] = big5.puntajes.A;
    vals['Big5_O'] = big5.puntajes.O;
    vals['Big5_L'] = big5.puntajes.L;
  }
  Object.keys(vals).forEach(function(col) {
    var idx = headers.indexOf(col);
    if (idx !== -1) hoja.getRange(filaIdx, idx + 1).setValue(vals[col]);
    else Logger.log('Columna no encontrada (ignorada): ' + col);
  });
}

// ── Actualizar MAESTRO_TALENTO ────────────────────────────────

function actualizarMaestro(celular, scoreRes) {
  var ss    = SpreadsheetApp.openById(MAESTRO_ID);
  var hojas = ss.getSheets();
  for (var h = 0; h < hojas.length; h++) {
    var datos   = hojas[h].getDataRange().getValues();
    var headers = datos[0].map(function(x) { return String(x).trim(); });
    var iCel    = headers.indexOf('Celular');
    if (iCel === -1) iCel = headers.indexOf('ID_Candidato');
    if (iCel === -1) continue;

    for (var i = 1; i < datos.length; i++) {
      if (String(datos[i][iCel]).trim() !== celular) continue;
      var iScore = headers.indexOf('Score_Global');
      var iEst   = headers.indexOf('Estatus');
      if (iScore !== -1) hojas[h].getRange(i+1, iScore+1).setValue(scoreRes.score);
      if (iEst   !== -1) {
        var est = (scoreRes.veredicto === 'DESCARTE' || scoreRes.veredicto === 'PERFIL_NO_CONFIABLE')
          ? 'Descartado_Psico' : 'Psico_Completada';
        hojas[h].getRange(i+1, iEst+1).setValue(est);
      }
      return;
    }
  }
  Logger.log('Candidato no encontrado en MAESTRO_TALENTO: ' + celular);
}

// ── Funciones de calificación ─────────────────────────────────

function calcularZAVIC(respuestas) {
  var MAPA = {
    Z01:{A:'L',B:'M',C:'I',D:'C'}, Z02:{A:'L',B:'M',C:'I',D:'C'},
    Z03:{A:'L',B:'M',C:'I',D:'C'}, Z04:{A:'L',B:'M',C:'I',D:'C'},
    Z05:{A:'L',B:'M',C:'I',D:'C'}, Z06:{A:'L',B:'M',C:'I',D:'C'},
    Z07:{A:'L',B:'M',C:'I',D:'C'}, Z08:{A:'L',B:'M',C:'I',D:'C'},
    Z09:{A:'L',B:'M',C:'I',D:'C'}, Z10:{A:'L',B:'M',C:'I',D:'C'},
    Z11:{A:'L',B:'M',C:'I',D:'C'}, Z12:{A:'L',B:'M',C:'I',D:'C'},
    Z13:{A:'L',B:'M',C:'I',D:'C'}, Z14:{A:'L',B:'M',C:'I',D:'C'},
    Z15:{A:'L',B:'M',C:'I',D:'C'}
  };
  var scores = {L:0, M:0, I:0, C:0};
  respuestas.forEach(function(r) {
    if (!r || !r.id || !r.mas || !r.menos) return;
    var dm = MAPA[r.id] && MAPA[r.id][r.mas];
    var dl = MAPA[r.id] && MAPA[r.id][r.menos];
    if (dm === 'L' || dm === 'M') scores[dm] += 2;
    if (dl === 'I' || dl === 'C') scores[dl] += 2;
  });
  var norm = {};
  Object.keys(scores).forEach(function(k) { norm[k] = Math.round(scores[k] / 30 * 100); });
  var descartes = [], alertas = [];
  if (norm.L < 40) descartes.push('Legalidad baja: '      + norm.L);
  if (norm.M < 40) descartes.push('Moral baja: '          + norm.M);
  if (norm.I >= 70) descartes.push('Indiferencia alta: '  + norm.I);
  if (norm.C >= 40) descartes.push('Corrupcion elevada: ' + norm.C);
  if (norm.L >= 40 && norm.L < 70) alertas.push('Legalidad alerta: '    + norm.L);
  if (norm.M >= 40 && norm.M < 70) alertas.push('Moral alerta: '        + norm.M);
  if (norm.I >= 40 && norm.I < 70) alertas.push('Indiferencia alerta: ' + norm.I);
  if (norm.C >= 21 && norm.C < 40) alertas.push('Corrupcion alerta: '   + norm.C);
  return {
    puntajes: norm,
    veredicto: descartes.length > 0 ? 'DESCARTE' : alertas.length > 0 ? 'ALERTA' : 'PASA',
    descartes: descartes, alertas: alertas
  };
}

var CLAVE_DISC = {
  G01:{A:'D',B:'I',C:'S',D:'C'}, G02:{A:'D',B:'I',C:'S',D:'C'},
  G03:{A:'D',B:'I',C:'S',D:'C'}, G04:{A:'D',B:'I',C:'S',D:'C'},
  G05:{A:'D',B:'I',C:'S',D:'C'}, G06:{A:'D',B:'I',C:'S',D:'C'},
  G07:{A:'D',B:'I',C:'S',D:'C'}, G08:{A:'D',B:'I',C:'S',D:'C'},
  G09:{A:'D',B:'I',C:'S',D:'C'}, G10:{A:'D',B:'I',C:'S',D:'C'},
  G11:{A:'D',B:'I',C:'S',D:'C'}, G12:{A:'D',B:'I',C:'S',D:'C'},
  G13:{A:'D',B:'I',C:'S',D:'C'}, G14:{A:'D',B:'I',C:'S',D:'C'},
  G15:{A:'D',B:'I',C:'S',D:'C'}, G16:{A:'D',B:'I',C:'S',D:'C'},
  G17:{A:'D',B:'I',C:'S',D:'C'}, G18:{A:'D',B:'I',C:'S',D:'C'},
  G19:{A:'D',B:'I',C:'S',D:'C'}, G20:{A:'D',B:'I',C:'S',D:'C'},
  G21:{A:'D',B:'I',C:'S',D:'C'}, G22:{A:'D',B:'I',C:'S',D:'C'},
  G23:{A:'D',B:'I',C:'S',D:'C'}, G24:{A:'D',B:'I',C:'S',D:'C'}
};

function calcularDISC_GJ(respuestas) {
  var COLS = ['columna_I','columna_II','columna_III'];
  var resultado = {};
  COLS.forEach(function(col) {
    var scores = {D:0, I:0, S:0, C:0};
    (respuestas[col] || []).forEach(function(fila) {
      var clave = CLAVE_DISC[fila.grupo];
      if (!clave) return;
      ['A','B','C','D'].forEach(function(op) { scores[clave[op]] += (fila[op] || 0); });
    });
    var norm = {};
    Object.keys(scores).forEach(function(d) { norm[d] = Math.round((scores[d]-24)/72*100); });
    var dom = Object.keys(norm).reduce(function(a,b){ return norm[a]>=norm[b]?a:b; });
    resultado[col] = { normalizados: norm, dominante: dom };
  });
  var n = resultado['columna_II'].dominante;
  var p = resultado['columna_III'].dominante;
  resultado.meta = { natural: n, presion: p, congruente: n===p };
  return resultado;
}

function calificarBIG5GJ(respuestas) {
  if (!respuestas || respuestas.length !== 60) throw new Error('60 respuestas requeridas');
  var INVERSOS = [2,7,9,10,11,19,20,22,27,29,32,37,40,42,44,45,52,53,55,56];
  var DIMS = {
    R:[1,7,13,19,25,31,37,43,49,55], E:[2,8,14,20,26,32,38,44,50,56],
    X:[3,9,15,21,27,33,39,45,51,57], A:[4,10,16,22,28,34,40,46,52,58],
    O:[5,11,17,23,29,35,41,47,53,59], L:[6,12,18,24,30,36,42,48,54,60]
  };
  var CORTES = {
    R:{PASA:65,ALERTA:40}, E:{PASA:60,ALERTA:40},
    X:{PASA:50,ALERTA:30}, A:{PASA:55,ALERTA:35},
    O:{PASA:45,ALERTA:30}, L:{ALERTA:70,MUY:85}
  };
  var pts = respuestas.map(function(v,i){ return INVERSOS.indexOf(i+1)!==-1 ? 6-v : v; });
  var res = {};
  Object.keys(DIMS).forEach(function(d){
    res[d] = DIMS[d].reduce(function(a,n){ return a+pts[n-1]; },0)*2;
  });
  var verd = {};
  ['R','E','X','A','O'].forEach(function(d){
    verd[d] = res[d]>=CORTES[d].PASA?'PASA':res[d]>=CORTES[d].ALERTA?'ALERTA':'DESCARTE';
  });
  verd.L = res.L>=CORTES.L.MUY?'MUY_ELEVADA':res.L>=CORTES.L.ALERTA?'ALERTA':'NORMAL';
  var global = res.L>=CORTES.L.MUY?'PERFIL_NO_CONFIABLE':
    ['R','E','X','A','O'].some(function(d){return verd[d]==='DESCARTE';})?'NO_PASA':
    ['R','E','X','A','O'].some(function(d){return verd[d]==='ALERTA';})?'PASA_CON_ALERTAS':'PASA';
  return { puntajes: res, veredictos: verd, global: global };
}
