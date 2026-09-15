/* ═══════════════════════════════════════════════════════════
   ZAVIC-CXP v1.0 — Datos embebidos
   Variante orientada a Experiencia del Cliente (CXP)
   Mismo marco LMIC que ZAVIC-GJ: Legal · Moral · Indiferente · Corrupto
   Embebido para evitar restricciones CORS en file://
═══════════════════════════════════════════════════════════ */

const ZAVIC_CXP_ITEMS = [
  {
    id: 'C01',
    situacion: 'Un cliente espera 25 minutos por su pedido y se acerca a la caja muy molesto. El retraso fue un error de cocina, no tuyo.',
    opciones: {
      A: { texto: 'Le explico lo que pasó, me disculpo y aviso al jefe de piso de inmediato', dimension: 'L' },
      B: { texto: 'Le pido disculpas de parte del restaurante y busco una solución aunque no sea mi error', dimension: 'M' },
      C: { texto: 'Le digo que espere, que cocina está trabajando, y me regreso a lo mío', dimension: 'I' },
      D: { texto: 'Le digo que el retraso fue porque llegó en hora pico y que todos esperan igual', dimension: 'C' },
    },
  },
  {
    id: 'C02',
    situacion: 'Un cliente regresa un platillo diciendo que está mal cocinado. Tú lo revisaste antes de sacarlo y estaba bien.',
    opciones: {
      A: { texto: 'Llamo al jefe de piso para que maneje la situación conforme al protocolo', dimension: 'L' },
      B: { texto: 'Le escucho, me disculpo y le ofrezco reemplazar el platillo sin ponerme a discutir', dimension: 'M' },
      C: { texto: 'Le digo que no fue error nuestro pero que hablen con el gerente si quieren', dimension: 'I' },
      D: { texto: 'Le explico punto por punto por qué está equivocado para defenderme', dimension: 'C' },
    },
  },
  {
    id: 'C03',
    situacion: 'Al revisar el ticket ves que a un cliente le cobraron un platillo de más. Ya está por salir del restaurante.',
    opciones: {
      A: { texto: 'Lo alcanzo antes de que salga y le corrijo el cobro en ese momento', dimension: 'L' },
      B: { texto: 'Corro a avisarle — no puedo dejar que se vaya pagando más de lo que debe', dimension: 'M' },
      C: { texto: 'Si ya se fue, ya se fue — tampoco es tanto la diferencia', dimension: 'I' },
      D: { texto: 'Lo dejo ir — el error fue del sistema, no mío, y cerrar la caja ya es más fácil así', dimension: 'C' },
    },
  },
  {
    id: 'C04',
    situacion: 'Un cliente te pide una bebida "de cortesía" y amenaza con poner reseña negativa en Google si no se la das.',
    opciones: {
      A: { texto: 'Le explico que cortesías las autoriza el gerente y lo llamo para que decida', dimension: 'L' },
      B: { texto: 'Le ofrezco hablar con el gerente — no puedo dar cosas gratis por presión, pero quiero que quede contento', dimension: 'M' },
      C: { texto: 'Le digo que no depende de mí y me regreso a trabajar', dimension: 'I' },
      D: { texto: 'Le doy la bebida para que no ponga la reseña — total, nadie va a notar una bebida', dimension: 'C' },
    },
  },
  {
    id: 'C05',
    situacion: 'Un cliente pregunta por un platillo que ya no hay en existencia. Hay una opción similar pero $60 pesos más cara.',
    opciones: {
      A: { texto: 'Le informo que no hay y le menciono la alternativa con su precio, sin presionarlo', dimension: 'L' },
      B: { texto: 'Le explico la diferencia con honestidad para que él decida lo que más le conviene', dimension: 'M' },
      C: { texto: 'Le digo que no hay y espero a que él pregunte si hay algo más', dimension: 'I' },
      D: { texto: 'Le digo que la alternativa es "básicamente lo mismo" para cerrar la venta rápido', dimension: 'C' },
    },
  },
  {
    id: 'C06',
    situacion: 'Ves que tu compañero ignoró a un cliente en silla de ruedas porque "tardaba mucho en pedir". El cliente se nota incómodo.',
    opciones: {
      A: { texto: 'Me acerco al cliente, lo atiendo con calma y después hablo con mi compañero y el jefe', dimension: 'L' },
      B: { texto: 'Atiendo al cliente de inmediato — ese trato no está bien y no voy a dejarlo pasar', dimension: 'M' },
      C: { texto: 'No es mi mesa — si el cliente quiere atención que levante la mano', dimension: 'I' },
      D: { texto: 'No me meto para no tener roces con mi compañero', dimension: 'C' },
    },
  },
  {
    id: 'C07',
    situacion: 'Un cliente deja su celular en la mesa al irse. Ya salió del restaurante.',
    opciones: {
      A: { texto: 'Lo llevo a la caja, lo registro en el libro de objetos perdidos y aviso al jefe', dimension: 'L' },
      B: { texto: 'Salgo a alcanzarlo si puedo, o lo guardo en lugar seguro y lo reporto', dimension: 'M' },
      C: { texto: 'Lo dejo en la mesa y espero a que alguien más se haga cargo', dimension: 'I' },
      D: { texto: 'Me lo quedo por si el cliente no regresa — alguien lo va a aprovechar de todas formas', dimension: 'C' },
    },
  },
  {
    id: 'C08',
    situacion: 'Un grupo de clientes está muy ruidoso y otras tres mesas ya te hicieron comentarios al respecto.',
    opciones: {
      A: { texto: 'Me acerco al grupo con respeto y les pido que bajen un poco el volumen, conforme al protocolo', dimension: 'L' },
      B: { texto: 'Los abordo con amabilidad — quiero que todos disfruten su experiencia, incluidos ellos', dimension: 'M' },
      C: { texto: 'No es mi problema — si las otras mesas se quejan que hablen con el gerente', dimension: 'I' },
      D: { texto: 'No les digo nada para que no se enojen y dejen de consumir', dimension: 'C' },
    },
  },
  {
    id: 'C09',
    situacion: 'Tu jefe te pide que le digas a un cliente que el platillo está recién hecho, pero lleva más de 40 minutos en la lámpara de calor.',
    opciones: {
      A: { texto: 'Le digo a mi jefe que no puedo decir eso y le pido autorización para ofrecer algo diferente al cliente', dimension: 'L' },
      B: { texto: 'No puedo mentirle a un cliente — le propongo a mi jefe otra salida honesta', dimension: 'M' },
      C: { texto: 'Le digo lo que me pide mi jefe y ya — él es el responsable, no yo', dimension: 'I' },
      D: { texto: 'Se lo digo al cliente tal cual — si hay consecuencias, que las asuma mi jefe', dimension: 'C' },
    },
  },
  {
    id: 'C10',
    situacion: 'Un cliente pide hablar con el gerente porque su orden llegó fría. El gerente no está en el restaurante en este momento.',
    opciones: {
      A: { texto: 'Le informo que el gerente no está, me disculpo y busco a quien tenga autoridad para resolver', dimension: 'L' },
      B: { texto: 'Le digo la verdad y le ofrezco lo que sí puedo hacer en este momento para compensar', dimension: 'M' },
      C: { texto: 'Le digo que el gerente no está y que regrese más tarde o llame por teléfono', dimension: 'I' },
      D: { texto: 'Le digo que "el gerente acaba de salir" para ganar tiempo y que se calme solo', dimension: 'C' },
    },
  },
  {
    id: 'C11',
    situacion: 'Hay una fila de clientes esperando mesa. Llega un conocido tuyo y te pide que lo pases primero sin que nadie lo note.',
    opciones: {
      A: { texto: 'Le explico que no puedo hacer eso y que tiene que esperar su turno como todos', dimension: 'L' },
      B: { texto: 'Le digo con respeto que no sería justo para los demás y que espere su lugar', dimension: 'M' },
      C: { texto: 'Le digo que no depende de mí y lo mando con el hostess', dimension: 'I' },
      D: { texto: 'Le consigo mesa rápido — es un conocido y nadie va a saber exactamente qué pasó', dimension: 'C' },
    },
  },
  {
    id: 'C12',
    situacion: 'Un cliente se equivocó al pedir y quiere cambiar su orden. Cocina ya la preparó y el platillo está listo.',
    opciones: {
      A: { texto: 'Consulto con el jefe de piso el protocolo para estos casos antes de hacer cualquier cambio', dimension: 'L' },
      B: { texto: 'Busco la manera de ayudarle dentro de lo posible — el cliente cometió un error pero quiero que quede bien', dimension: 'M' },
      C: { texto: 'Le digo que ya no se puede cambiar y que la próxima vez revise bien antes de pedir', dimension: 'I' },
      D: { texto: 'Le hago el cambio sin decirle nada a cocina para no tener que dar explicaciones', dimension: 'C' },
    },
  },
  {
    id: 'C13',
    situacion: 'Ves una cucaracha cerca de la zona de espera. Hay clientes sentados a menos de dos metros.',
    opciones: {
      A: { texto: 'Aviso al jefe de inmediato y sigo el protocolo de contingencia sanitaria', dimension: 'L' },
      B: { texto: 'Lo reporto de inmediato — eso no puede esperar, hay clientes presentes', dimension: 'M' },
      C: { texto: 'La espanto discretamente para que se vaya y espero a que alguien más lo reporte', dimension: 'I' },
      D: { texto: 'No digo nada para no generar pánico — si nadie la vio, mejor que quede así', dimension: 'C' },
    },
  },
  {
    id: 'C14',
    situacion: 'Un cliente pide dividir la cuenta de una forma que el sistema no permite fácilmente. Hay otras mesas esperando.',
    opciones: {
      A: { texto: 'Le explico la limitación del sistema y busco la solución más cercana que sí puedo procesar', dimension: 'L' },
      B: { texto: 'Me tomo el tiempo necesario para resolverlo bien — él no tiene la culpa de que el sistema sea limitado', dimension: 'M' },
      C: { texto: 'Le digo que el sistema no puede hacerlo así y que escoja otra forma', dimension: 'I' },
      D: { texto: 'Le cobro de una forma aproximada sin decirle que no es exactamente lo que pidió', dimension: 'C' },
    },
  },
  {
    id: 'C15',
    situacion: 'Al revisar Google al final del turno ves una reseña de 1 estrella que describe algo que claramente no ocurrió en el restaurante — parece una reseña equivocada o falsa.',
    opciones: {
      A: { texto: 'La reporto al gerente con el detalle y sugerimos responder con los hechos conforme al protocolo de reputación', dimension: 'L' },
      B: { texto: 'Le aviso al gerente — hay que responder con la verdad sin atacar al cliente', dimension: 'M' },
      C: { texto: 'No es mi área — que lo vea el gerente o marketing cuando la detecten', dimension: 'I' },
      D: { texto: 'Pido a mis compañeros que le pongan reseñas de 5 estrellas para compensar sin decirle al gerente', dimension: 'C' },
    },
  },
];
