/* ═══════════════════════════════════════════════════════════
   ZAVIC-GJ v1.0 — Datos embebidos
   Fuente: data/ZAVIC-GJ_v1.0.json
   Embebido para evitar restricciones CORS en file://
   ═══════════════════════════════════════════════════════════ */

const ZAVIC_ITEMS = [
  {
    id: 'Z01',
    situacion: 'Al final de tu turno te das cuenta de que te sobraron $200 pesos en la caja. Nadie lo notó y ya casi no hay gente.',
    opciones: {
      A: { texto: 'Los reporto de inmediato a mi jefe aunque sea tarde',             dimension: 'L' },
      B: { texto: 'Los dejo en la caja y anoto la diferencia en el cuaderno',        dimension: 'M' },
      C: { texto: 'Los dejo ahí y espero a que alguien más lo resuelva mañana',      dimension: 'I' },
      D: { texto: 'Me los llevo porque de todas formas nadie va a saber',            dimension: 'C' },
    },
  },
  {
    id: 'Z02',
    situacion: 'Tu compañero te pide que lo cubras en el checador porque llegó tarde y no quiere que le descuenten. Tú ya llegaste a tiempo.',
    opciones: {
      A: { texto: 'Le digo que no puedo hacer eso, que hable con el jefe directamente', dimension: 'L' },
      B: { texto: 'Le explico que eso no está bien y le propongo otra solución',        dimension: 'M' },
      C: { texto: 'No me meto — si quiere hacerlo que lo haga él solo',                dimension: 'I' },
      D: { texto: 'Lo registro porque total, entre compas nos ayudamos',               dimension: 'C' },
    },
  },
  {
    id: 'Z03',
    situacion: 'Estás en el almacén y ves que hay insumos de más. Un compañero te dice que siempre se llevan cositas a casa y que nadie se da cuenta.',
    opciones: {
      A: { texto: 'No tomo nada y le digo que eso tiene consecuencias para todos',                      dimension: 'L' },
      B: { texto: "No me llevo nada — eso no va conmigo aunque digan que 'siempre se hace'",           dimension: 'M' },
      C: { texto: 'No me meto en lo que hacen los demás, yo solo vine a trabajar',                     dimension: 'I' },
      D: { texto: 'Me llevo algo chico, si ya todos lo hacen no es para tanto',                        dimension: 'C' },
    },
  },
  {
    id: 'Z04',
    situacion: 'Un cliente te deja propina de más por error — te da $500 cuando el cobro era de $50. Ya se fue y no dejó datos.',
    opciones: {
      A: { texto: 'Reporto el excedente a mi jefe para que se guarde por si regresa',     dimension: 'L' },
      B: { texto: 'Separo el extra y le aviso al jefe por si el cliente reclama después', dimension: 'M' },
      C: { texto: 'Lo meto a la caja general y ya, no es mi problema',                   dimension: 'I' },
      D: { texto: 'Me lo quedo — el cliente ya se fue y fue su error',                   dimension: 'C' },
    },
  },
  {
    id: 'Z05',
    situacion: 'Ves que tu supervisor está cobrando de más en la cuenta de una mesa sin que los clientes lo noten.',
    opciones: {
      A: { texto: 'Lo reporto al gerente aunque me lleve problemas con mi supervisor',  dimension: 'L' },
      B: { texto: 'Le digo directamente a mi supervisor que eso no está bien',          dimension: 'M' },
      C: { texto: 'No es mi área — prefiero no meterme en eso',                        dimension: 'I' },
      D: { texto: 'Me callo y después le pido que me dé algo de lo que obtuvo',         dimension: 'C' },
    },
  },
  {
    id: 'Z06',
    situacion: 'El restaurante está cerrando y te encargan la limpieza rápida. Nadie se va a quedar a revisar si lo hiciste bien.',
    opciones: {
      A: { texto: 'Limpio siguiendo el protocolo completo aunque nadie lo vea',                        dimension: 'L' },
      B: { texto: 'Lo hago bien porque así me enseñaron y porque hay gente que confía en mí',         dimension: 'M' },
      C: { texto: 'Hago lo básico y me voy — igual nadie va a notar la diferencia',                   dimension: 'I' },
      D: { texto: 'Le digo al jefe que ya está listo aunque no haya terminado bien',                  dimension: 'C' },
    },
  },
  {
    id: 'Z07',
    situacion: 'Escuchas a un compañero hablar por teléfono afuera del trabajo diciéndole a alguien los precios del menú y los horarios del gerente.',
    opciones: {
      A: { texto: 'Se lo digo al gerente porque esa información es de la empresa',                  dimension: 'L' },
      B: { texto: 'Le llamo la atención a mi compañero — eso puede hacerle daño a todos',           dimension: 'M' },
      C: { texto: 'No sé qué estará haciendo, pero no es mi problema',                              dimension: 'I' },
      D: { texto: 'Le pregunto de qué se trata para ver si yo también saco algo de ahí',            dimension: 'C' },
    },
  },
  {
    id: 'Z08',
    situacion: 'Hay un error en el sistema y puedes marcar más horas de las que trabajaste sin que nadie lo note en nómina.',
    opciones: {
      A: { texto: 'No lo hago y aviso a mi jefe del error para que lo corrijan',                         dimension: 'L' },
      B: { texto: 'Registro solo las horas reales — no me parece correcto abusar de un error',           dimension: 'M' },
      C: { texto: 'No lo toco — si alguien más lo quiere hacer, allá él',                               dimension: 'I' },
      D: { texto: 'Le agrego unas horas extra — es un error del sistema, no mío',                       dimension: 'C' },
    },
  },
  {
    id: 'Z09',
    situacion: 'Un proveedor te ofrece $500 pesos de propina si le compartes los precios a los que estás comprando ciertos productos.',
    opciones: {
      A: { texto: 'Le digo que no y le aviso a mi jefe de lo que me propuso',                            dimension: 'L' },
      B: { texto: 'Le digo que no — eso no está bien aunque el dinero me vendría bien',                 dimension: 'M' },
      C: { texto: 'No le digo nada a nadie, ni que sí ni que no, y me hago el desentendido',            dimension: 'I' },
      D: { texto: 'Le paso el dato — no le estoy robando a nadie, solo digo una hora',                  dimension: 'C' },
    },
  },
  {
    id: 'Z10',
    situacion: 'Notas que hay un platillo que siempre sale mal en tu área y que los clientes se quejan, pero el gerente todavía no lo sabe.',
    opciones: {
      A: { texto: 'Se lo reporto al gerente aunque me regañen por no haberlo dicho antes',  dimension: 'L' },
      B: { texto: 'Lo hablo con el equipo primero y después lo escalamos juntos',            dimension: 'M' },
      C: { texto: 'Si alguien más lo quiere reportar, que lo haga — yo no me complico',     dimension: 'I' },
      D: { texto: 'No digo nada para no meterme en problemas con mis compañeros',           dimension: 'C' },
    },
  },
  {
    id: 'Z11',
    situacion: 'Encuentras la cartera de un cliente en el baño con dinero y tarjetas adentro. El lugar está casi vacío.',
    opciones: {
      A: { texto: 'La llevo de inmediato a la caja y se la entrego al jefe para resguardo',         dimension: 'L' },
      B: { texto: 'La guardo en lugar seguro y aviso al gerente para que busquen al dueño',         dimension: 'M' },
      C: { texto: 'La dejo donde está — si alguien más la encuentra que la entregue',               dimension: 'I' },
      D: { texto: 'Agarro algo de efectivo y después la entrego — igual nadie sabe cuánto traía',   dimension: 'C' },
    },
  },
  {
    id: 'Z12',
    situacion: 'Estás haciendo el corte del día con otro compañero. Al comparar notas, ves que a él le sobra dinero que en realidad es un faltante tuyo.',
    opciones: {
      A: { texto: 'Digo la verdad — ese dinero no es suyo aunque me salga peor a mí',               dimension: 'L' },
      B: { texto: 'Aclaro el error de inmediato, aunque me toque reportar el faltante',             dimension: 'M' },
      C: { texto: 'Prefiero no decir nada — si el cuadre salió así que quede así',                  dimension: 'I' },
      D: { texto: 'Dejo que le sobre a él — así no tengo que reponer yo el faltante',               dimension: 'C' },
    },
  },
  {
    id: 'Z13',
    situacion: 'Tu jefe te pide que firmes un documento que dice que recibiste capacitación, pero tú sabes que esa capacitación no se dio.',
    opciones: {
      A: { texto: 'Le digo que no voy a firmar algo que no pasó y le explico por qué',                  dimension: 'L' },
      B: { texto: 'Le pregunto si no podemos resolver esto de otra forma que sea verdadera',            dimension: 'M' },
      C: { texto: 'Firmo y ya — eso es problema de la empresa, no mío',                               dimension: 'I' },
      D: { texto: 'Firmo a cambio de que me den el día que me deben de descanso',                      dimension: 'C' },
    },
  },
  {
    id: 'Z14',
    situacion: 'Durante el servicio te equivocas con un pedido y el plato incorrecto ya está en la mesa. Los clientes no lo han notado todavía.',
    opciones: {
      A: { texto: 'Aviso al jefe de piso y corrijo el pedido de acuerdo al protocolo',               dimension: 'L' },
      B: { texto: 'Me acerco a la mesa, me disculpo y corrijo el error antes de que coman',          dimension: 'M' },
      C: { texto: 'Espero a ver si se quejan — puede que ni lo noten',                               dimension: 'I' },
      D: { texto: 'Dejo que lo coman para no tener que reponer el platillo de mi bolsa',             dimension: 'C' },
    },
  },
  {
    id: 'Z15',
    situacion: 'Un compañero de confianza te dice que hay una forma de ajustar el inventario para que no se note que falta mercancía. Te invita a participar.',
    opciones: {
      A: { texto: 'Le digo que no y lo reporto — eso le hace daño al negocio y a todos',            dimension: 'L' },
      B: { texto: 'Le digo que no me interesa y que piense bien en lo que está haciendo',            dimension: 'M' },
      C: { texto: 'No participo pero tampoco digo nada — no quiero pleitos',                        dimension: 'I' },
      D: { texto: 'Le pregunto cómo funciona antes de decidir si me meto o no',                     dimension: 'C' },
    },
  },
];
