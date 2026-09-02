/* ═══════════════════════════════════════════════════════════
   BIG5-GJ v1.0 — Datos embebidos
   Fuente: data/BIG5-GJ_v1.0.json
   Embebido para evitar restricciones CORS en file://

   CONFIDENCIAL — GastroJobs / The Hap&D Co.
   NO modificar el orden de los ítems. El orden del 1 al 60
   está diseñado para que el candidato no identifique las
   dimensiones. La Escala L (ítems 6,12,18,24,30,36,42,48,54,60)
   detecta deseabilidad social — no revelar al candidato.
   ═══════════════════════════════════════════════════════════ */

const BIG5_ITEMS = [
  { num: 1,  dimension: 'R', inverso: false, texto: 'Cuando me asignan una tarea, la termino aunque tenga que quedarme más tiempo del acordado.' },
  { num: 2,  dimension: 'E', inverso: true,  texto: 'Cuando el restaurante está a full y todo se atrasa, me desespero y me cuesta mantener la calma.' },
  { num: 3,  dimension: 'X', inverso: false, texto: 'Me gusta arrancar conversación con gente nueva, ya sea con el equipo o con los clientes.' },
  { num: 4,  dimension: 'A', inverso: false, texto: 'Si alguien de mi equipo está batallando con su trabajo, le echo la mano aunque no sea mi responsabilidad.' },
  { num: 5,  dimension: 'O', inverso: false, texto: 'Cuando llega un cambio en el menú o en los procesos, lo veo como una oportunidad de aprender algo nuevo.' },
  { num: 6,  dimension: 'L', inverso: false, texto: 'Siempre llego puntual a todos mis compromisos, sin excepción.' },
  { num: 7,  dimension: 'R', inverso: true,  texto: 'A veces dejo pendientes del turno anterior porque sé que alguien más los puede resolver.' },
  { num: 8,  dimension: 'E', inverso: false, texto: 'Cuando un cliente se pone difícil o agresivo, logro mantenerme calmado y manejar la situación sin perder los estribos.' },
  { num: 9,  dimension: 'X', inverso: true,  texto: 'Prefiero trabajar de manera independiente que estar todo el tiempo interactuando con el equipo o los clientes.' },
  { num: 10, dimension: 'A', inverso: true,  texto: 'Cuando no estoy de acuerdo con alguien, prefiero no decir nada para evitar problemas.' },
  { num: 11, dimension: 'O', inverso: true,  texto: 'Si algo ha funcionado bien por años, no veo por qué cambiarlo aunque llegue alguien con ideas nuevas.' },
  { num: 12, dimension: 'L', inverso: false, texto: 'Nunca he dicho una mentira para salir de un problema en el trabajo.' },
  { num: 13, dimension: 'R', inverso: false, texto: 'Cuando me comprometo a entregar algo en una fecha, lo hago aunque tenga que reorganizar todo mi día.' },
  { num: 14, dimension: 'E', inverso: false, texto: 'Puedo trabajar bajo presión durante varios días seguidos sin que mi desempeño se caiga.' },
  { num: 15, dimension: 'X', inverso: false, texto: 'Me energiza liderar al equipo durante un turno complicado — ese tipo de retos me prenden.' },
  { num: 16, dimension: 'A', inverso: false, texto: 'Cuando doy retroalimentación a mi equipo, busco que la persona se vaya motivada, no aplastada.' },
  { num: 17, dimension: 'O', inverso: false, texto: 'Me interesa entender por qué las cosas funcionan como funcionan, no solo hacer lo que me dicen.' },
  { num: 18, dimension: 'L', inverso: false, texto: 'Nunca he llegado tarde al trabajo sin haber avisado antes.' },
  { num: 19, dimension: 'R', inverso: true,  texto: 'Hay días en que me cuesta trabajo arrancar y termino dejando cosas para el siguiente turno.' },
  { num: 20, dimension: 'E', inverso: true,  texto: 'Cuando siento que el trabajo se me acumula, me bloqueo y me cuesta saber por dónde empezar.' },
  { num: 21, dimension: 'X', inverso: false, texto: 'Cuando hay tensión en el equipo, suelo ser de los primeros en abrir el tema y buscar que se resuelva.' },
  { num: 22, dimension: 'A', inverso: true,  texto: 'Si alguien no hace bien su chamba, prefiero reportarlo directamente en lugar de hablar primero con él.' },
  { num: 23, dimension: 'O', inverso: false, texto: 'Cuando alguien del equipo propone una idea que no se había probado, le doy el espacio para intentarla.' },
  { num: 24, dimension: 'L', inverso: false, texto: 'Siempre entrego los reportes completos y a tiempo, sin importar la carga del turno.' },
  { num: 25, dimension: 'R', inverso: false, texto: 'Al inicio del turno ya tengo claro qué hay que hacer y en qué orden, sin esperar a que me lo digan.' },
  { num: 26, dimension: 'E', inverso: false, texto: 'Cuando alguien del equipo o un cliente me saca de quicio, logro no dejarlo ver.' },
  { num: 27, dimension: 'X', inverso: true,  texto: 'En reuniones o juntas, prefiero escuchar a los demás antes de hablar, aunque tenga algo claro que decir.' },
  { num: 28, dimension: 'A', inverso: false, texto: 'Me importa que mi equipo esté bien — no solo que haga bien su trabajo.' },
  { num: 29, dimension: 'O', inverso: true,  texto: 'Cuando hay que tomar una decisión rápida, prefiero seguir lo que ya sé que funciona en lugar de improvisar.' },
  { num: 30, dimension: 'L', inverso: false, texto: 'Nunca he cometido un error y culpado a otra persona para salvarme.' },
  { num: 31, dimension: 'R', inverso: false, texto: 'Si detecto un problema en mi área aunque no sea mi culpa, lo resuelvo sin esperar a que alguien me lo pida.' },
  { num: 32, dimension: 'E', inverso: true,  texto: 'Hay situaciones en el trabajo en las que pierdo el control de mis reacciones y después me arrepiento.' },
  { num: 33, dimension: 'X', inverso: false, texto: 'Me resulta fácil motivar al equipo cuando el ambiente está pesado o la gente está baja de energía.' },
  { num: 34, dimension: 'A', inverso: false, texto: 'Cuando veo que alguien está cometiendo un error, lo corrijo con calma y en privado, no frente a todos.' },
  { num: 35, dimension: 'O', inverso: false, texto: 'Me gusta leer sobre el sector — tendencias, nuevos conceptos, lo que está funcionando en otros restaurantes.' },
  { num: 36, dimension: 'L', inverso: false, texto: 'Siempre actúo con honestidad, incluso cuando no hacerlo no tendría consecuencias.' },
  { num: 37, dimension: 'R', inverso: true,  texto: 'A veces entrego checklists o reportes a medias porque ya es tarde y prefiero terminar el turno.' },
  { num: 38, dimension: 'E', inverso: false, texto: 'Cuando recibo críticas de mi jefe, las proceso con calma y las uso para mejorar, sin que me desmotiven.' },
  { num: 39, dimension: 'X', inverso: false, texto: 'En situaciones nuevas o difíciles, me ofrezco a coordinar al equipo en lugar de esperar a que alguien lo haga.' },
  { num: 40, dimension: 'A', inverso: true,  texto: 'Cuando alguien comete un error repetido, me cuesta no perder la paciencia con esa persona.' },
  { num: 41, dimension: 'O', inverso: false, texto: 'Cuando llega un sistema nuevo o una herramienta diferente, le entro con curiosidad, no con resistencia.' },
  { num: 42, dimension: 'L', inverso: false, texto: 'Nunca he hablado mal de un compañero o jefe a sus espaldas.' },
  { num: 43, dimension: 'R', inverso: false, texto: 'Cuando cometo un error, lo reconozco de frente y propongo cómo corregirlo, sin esperar a que me lo señalen.' },
  { num: 44, dimension: 'E', inverso: true,  texto: 'Cuando recibo una crítica de mi jefe delante del equipo, me cuesta no reaccionar en el momento.' },
  { num: 45, dimension: 'X', inverso: true,  texto: 'Prefiero que sean otros quienes tomen la iniciativa cuando hay que mover al equipo en una situación difícil.' },
  { num: 46, dimension: 'A', inverso: false, texto: 'Cuando hay un conflicto entre dos compañeros, busco mediar y llegar a una solución que funcione para los dos.' },
  { num: 47, dimension: 'O', inverso: false, texto: 'Si el restaurante cambia de concepto o de marca, me adapto sin problema y le entro con buena actitud.' },
  { num: 48, dimension: 'L', inverso: false, texto: 'Nunca me he aprovechado de mi posición para obtener algún beneficio que no me correspondía.' },
  { num: 49, dimension: 'R', inverso: false, texto: 'Mantengo mi área de trabajo ordenada y en condiciones, aunque el turno esté muy cargado.' },
  { num: 50, dimension: 'E', inverso: false, texto: 'Cuando hay problemas externos — tráfico, mal tiempo, proveedores tardados — no dejo que me afecten el ánimo en el turno.' },
  { num: 51, dimension: 'X', inverso: false, texto: 'Construyo fácilmente relaciones de confianza con gente nueva, ya sea del equipo o de otras áreas.' },
  { num: 52, dimension: 'A', inverso: true,  texto: 'A veces me cuesta aceptar errores ajenos sin dejar que eso afecte cómo trato a esa persona el resto del turno.' },
  { num: 53, dimension: 'O', inverso: true,  texto: 'Prefiero que el corporativo me diga exactamente qué hacer en lugar de tener que proponer o improvisar.' },
  { num: 54, dimension: 'L', inverso: false, texto: 'Siempre cumplo mis compromisos laborales, incluso cuando hacerlo implica un esfuerzo extra de mi parte.' },
  { num: 55, dimension: 'R', inverso: true,  texto: 'Hay veces que meto información incompleta en los reportes porque ya es tarde y quiero terminar el turno.' },
  { num: 56, dimension: 'E', inverso: true,  texto: 'Cuando el equipo está desmotivado, ese ambiente me contagia y me afecta mi propio desempeño.' },
  { num: 57, dimension: 'X', inverso: false, texto: 'Cuando hay que dar malas noticias al equipo, lo hago directo y de frente, sin delegarlo a alguien más.' },
  { num: 58, dimension: 'A', inverso: false, texto: 'Escucho a mi equipo antes de tomar una decisión que los afecta, aunque al final la decisión sea mía.' },
  { num: 59, dimension: 'O', inverso: false, texto: 'Me interesa saber cómo funcionan otras áreas del negocio — costos, proveedores, marketing — aunque no sea mi área.' },
  { num: 60, dimension: 'L', inverso: false, texto: 'Siempre actúo de la misma manera, ya sea que me estén observando o no.' },
];
