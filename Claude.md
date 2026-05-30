================================================================================
PROYECTO FREDDY — GASTROJOBS
BASE DE CONOCIMIENTO ÚNICA — VERSIÓN 7.2
================================================================================
The Hap&D Co. | Versión 7.2 | Mayo 2026 | Confidencial
Líder: Cristóbal Salinas — Supply Chain y Planeación de Demanda
Ejecutor: Cris + Claude (Freddy)
Servidor destino: Vapiano Reforma (Claude Cowork)

INSTRUCCIÓN DE USO:
Este documento es la ÚNICA fuente de verdad del proyecto. Reemplaza todos los
documentos anteriores (v1.0 a v7.1). Leerlo completo antes de ejecutar
cualquier acción. El Sheets siempre tiene prioridad sobre este documento
para datos operativos.

VERSIÓN 7.2 — CAMBIOS DESDE V7.1:
  - Detonador rediseñado: correo de baja del GG → Cowork actualiza Sheets
  - Flujo rediseñado en 4 Fases (Fase 1 y 2 corregidas desde cero)
  - Eliminadas todas las referencias a "12 preguntas de Nayeli"
  - Happy Storage: eliminada sucursal Reforma (sin apertura en puerta)
  - Mantenimiento corporativo (Julio + 3 técnicos) asignados correctamente a SC
  - Auxiliar tentativa: Jessica Ávila (gerente administrativa Carso)
  - Identidad Freddy: agregada cuenta Indeed
  - Skills: ya construidos — sección actualizada con lista real
  - Hoja 0_Clientes redefinida como base de conocimiento viva de Freddy

================================================================================
1. CONTEXTO Y OBJETIVO
================================================================================

The Hap&D Co opera bajo 3 marcas activas y un corporativo:
  Vapiano México         — 5 tiendas CDMX
  La Pixeria de Luchito  — Vallejo (abierta) + Tlalnepantla (próxima como Dark Kitchen)
  Happy Storage          — Montes Urales + Santa Fe
  Support Center         — corporativo del holding

PROBLEMA DE ORIGEN:
Alta rotación operativa por candidatos que no cumplían el perfil mínimo,
aceptados por urgencia. Con la salida de Nayeli Sanjuan (Talento), el área
quedó sin operador humano dedicado.

OBJETIVO:
Automatizar el proceso completo de reclutamiento usando IA y automatizaciones,
eliminando la dependencia de cualquier persona en particular.

SEPARACIÓN CRÍTICA:
  Talento  → Atracción, filtrado, evaluación, documentación
             Responsable temporal: Cristóbal Salinas
             Apoyo: Auxiliar Administrativo — tentativa Jessica Ávila
                    (actual gerente administrativa Carso, por confirmar)
  RRHH     → Contratos, IMSS, nómina
             Responsable: Abraham Fósil
             El flujo de Freddy TERMINA al entregar el expediente a Abraham.

ALCANCE ACTUAL: Vapiano México (5 tiendas) + La Pixeria de Luchito.
Arquitectura diseñada para escalar a Happy Storage y terceros sin cambios.
Visión de largo plazo: GastroJobs como servicio vendible al sector.

================================================================================
2. IDENTIDAD DE LA PLATAFORMA Y EL AGENTE
================================================================================

PLATAFORMA: GastroJobs
  Independiente de cualquier marca. Escalable. SEO claro para candidatos.
  Opera para todas las marcas del holding y eventualmente para terceros.

AGENTE: Freddy
  Correo operativo:   reclutamiento@hapd.mx
  WhatsApp:           +52 56 4871 3095 (chip corporativo dedicado — SOLO reclutamiento)
  Login ManyChat:     Fred Ortega / 56 4871 3095
  Cuenta ManyChat:    GastroJobs
  BM vinculado:       GastroJobs (Meta Business Manager)
  Facebook:           Fred Ortega — login 56 4871 3095
  Indeed:             Cuenta GastroJobs — reclutamiento@hapd.mx (config. pendiente)

PRINCIPIO RECTOR:
Freddy filtra, agenda, recuerda, analiza y reporta.
El auxiliar ejecuta lo que Freddy no puede.
Cris recibe el reporte y escala a Dirección.
El sistema sobrevive a la rotación de cualquier persona.

================================================================================
3. DATAMAESTRO — FUENTE DE VERDAD DE DATOS
================================================================================

ARCHIVO OFICIAL:
  Nombre:       GastroJobs — Data Maestro.gsheet
  Plataforma:   Google Sheets (migrado desde Excel en mayo 2026)
  Drive:        supportcenter.hapd@gmail.com
  Ruta:         THE HAP D CO — HOLDING / 01_Vapiano México / 02_Claude / Talento /
  Shortcut ID:  1fUXUs9Y3_V85ipmbtAK4wikkmoXBj83b

CONEXIÓN CON MANYCHAT:
  Integración nativa de ManyChat con Google Sheets — sin middleware.
  Zapier / Make / n8n solo si el volumen lo justifica en el futuro.

REGLA GLOBAL: Si hay conflicto entre este documento y el Sheets, el Sheets gana.

--------------------------------------------------------------------------------
PESTAÑAS — ESTRUCTURA COMPLETA
--------------------------------------------------------------------------------

  Pestaña              Contenido                              Responsable
  0_Clientes           Base de conocimiento viva de Freddy:   Cris (crece con
                       info de marcas, condiciones, FAQ de    uso real)
                       candidatos, preguntas frecuentes
  0_INICIO             Portada e índice (no usa Cowork)       Cris
  1_Posiciones         Sueldos y compensación por puesto      Abraham Fósil
  2_Tiendas            Directorio de sucursales               Cris
  3_Canales            Plataformas por nivel de puesto        Abraham Fósil
  4_Entrevistadores    Reglas de entrevistador por puesto     Abraham Fósil
  5_Vacantes           LEGACY — NO USAR                       —
  6_Documentos         11 documentos requeridos               Cris / Abraham
  7_Festivos           Días bloqueados en Calendly            Cris
  8_Plantillas         DETONADOR — Cowork actualiza           Cowork (automático
                       automáticamente vía correo de baja     vía correo de baja)
  9_Cartera_Candidatos Base activa de candidatos              Cowork + Cris

--------------------------------------------------------------------------------
HOJA 0_Clientes — BASE DE CONOCIMIENTO VIVA DE FREDDY
--------------------------------------------------------------------------------

Esta hoja es el cerebro de respuestas de Freddy. Contiene toda la información
que los candidatos necesitan saber antes de decidir si continúan: horarios,
sueldos, condiciones, prestaciones, tipo de trabajo, uniformes, etc.

PRINCIPIO DE OPERACIÓN:
  - ManyChat lee esta hoja para responder cualquier pregunta del candidato
    durante la Fase 1
  - Si Freddy no tiene la respuesta → dice "No tengo esa información aún"
    — NO inventa
  - Cada pregunta nueva y repetitiva es candidata a ser agregada aquí
  - Cris alimenta la hoja periódicamente con las preguntas frecuentes reales
  - La hoja empieza pequeña y crece con cada ciclo de candidatos

DATOS ACTUALES:

VAP — Vapiano México
  Tipo: Restaurante italiano casual dining, 5 sucursales CDMX
  Descripción: Cadena italiana en CDMX desde 2013. Pasta fresca, pizza
               artesanal y buen ambiente. Sucursales: Carso, Samara,
               Reforma, Tlalnepantla y Vallejo.
  Horario: Lunes a domingo, turnos rolados (mañana, tarde y noche)
  Tono Freddy: Profesional-cálido
  Correo: reclutamiento@hapd.mx  /  WhatsApp: 5648713095

LUC — La Pixeria de Luchito
  Tipo: Pizzería urbana
  Descripción: La pizzería más chingona de la CDMX. Pizzas únicas, tragos
               de litro, ambiente urbano con grafitis y neón.
  Dirección: Parque Vía Vallejo, Calz. Vallejo 1090, Azcapotzalco
  Horario: 1:00 pm – 1:00 am todos los días
  Tono Freddy: Casual-urbano (directo, con personalidad)
  Correo: reclutamiento@hapd.mx  /  WhatsApp: 5648713095

HST — Happy Storage
  Tipo: Minibodegas / Self-Storage
  Descripción: Renta minibodegas con acceso por huella digital,
               vigilancia 24/7 y seguro incluido.
  Sucursales: HS1 Montes Urales (Volcán 240, Polanco)
              HS2 Patio Santa Fe (CDMX)
  Tono Freddy: Profesional-accesible
  Correo: reclutamiento@hapd.mx  /  WhatsApp: 5648713095

SC — Support Center The Hap&D Co.
  Tipo: Corporativo del holding
  Descripción: Oficina corporativa. Aquí operan Finanzas, Compras,
               Marketing, TI, Talento y Operaciones.
  Equipo de Mantenimiento corporativo (sin tienda fija, trabajan en todas):
    Gerente de Construcción: Julio Flores
    3 Técnicos de mantenimiento
  Tono Freddy: Corporativo-profesional
  Correo: reclutamiento@hapd.mx  /  WhatsApp: 5648713095

CRECIMIENTO DE LA HOJA:
  Ejemplo: si muchos candidatos preguntan "¿se trabaja el domingo?" y no
  está en la hoja → Cris agrega la respuesta → Freddy ya la sabe.
  Este ciclo es continuo. La hoja nunca está "terminada".

--------------------------------------------------------------------------------
COMPENSACIÓN POR PUESTO (pestaña 1_Posiciones — Vapiano México)
--------------------------------------------------------------------------------

  Puesto                   Sueldo Mensual    Nivel
  Gerente General          $20,000 MXN       Gerencial
  Chef                     $17,000 MXN       Gerencial
  Gerente de Servicio      $12,000 MXN       Gerencial
  Sous Chef                $10,000 MXN       Gerencial
  Mesero                    $9,587 MXN       Operativo
  Hostess                   $9,587 MXN       Operativo
  Ayudante de Cocina        $9,587 MXN       Operativo
  Ayudante de Barra         $9,587 MXN       Operativo
  Mantenimiento             Por definir       Operativo

  Todos incluyen: IMSS, vacaciones y aguinaldo.
  Propinas: variables por tienda y turno — se informan en el bot.
  Compensación LUC, HST, SC: pendiente de confirmar con Abraham.

--------------------------------------------------------------------------------
SUCURSALES (pestaña 2_Tiendas)
--------------------------------------------------------------------------------

  VAP — Vapiano México:
    M1  Carso          Polanco / Miguel Hidalgo
    M2  Samara         Santa Fe
    M3  Reforma        Reforma / Centro
    M5  Tlalnepantla   EDOMEX
    M6  Vallejo        Gustavo A. Madero

  LUC — La Pixeria de Luchito:
    L2  Vallejo        Parque Vía Vallejo, Azcapotzalco

  HST — Happy Storage:
    HS1 Montes Urales  Volcán 240, Lomas de Chapultepec
    HS2 Santa Fe       CDMX

  SC — Support Center:
    SC1 Corporativo    CDMX (dirección por confirmar)
    SC-MTO Mantenimiento  Sin tienda fija — cubre todas las sucursales

--------------------------------------------------------------------------------
CANALES POR NIVEL (pestaña 3_Canales)
--------------------------------------------------------------------------------

  Gerenciales:  Indeed, Facebook, LinkedIn, Computrabajo, Gastronom
  Operativos:   Indeed, Facebook, TikTok

--------------------------------------------------------------------------------
ENTREVISTADORES POR PUESTO (pestaña 4_Entrevistadores)
--------------------------------------------------------------------------------

  Filtro 1 — todas las posiciones:  Auxiliar (tentativa: Jessica Ávila)
  GG y Gerente de Servicio:         Diego López (d.lopez@fac.mx)
  Chef y Sous Chef:                 Erick Campuzano (chefcorporativo@fac.mx)
  Mesero, Hostess, Ayudantes:       GG de la tienda destino
  Mantenimiento:                    Julio Flores (construccion@fac.mx)

--------------------------------------------------------------------------------
DOCUMENTOS REQUERIDOS (pestaña 6_Documentos — 11 docs, todos obligatorios)
--------------------------------------------------------------------------------

  1.  Solicitud de empleo o CV (llenado en línea)
  2.  Cuenta de correo electrónico (Gmail preferente)
  3.  INE — ambos lados, legible
  4.  Número de Seguro Social
  5.  CURP
  6.  Acta de Nacimiento
  7.  Constancia de Situación Fiscal (SAT, reciente)
  8.  Comprobante de Domicilio (no mayor a 3 meses)
  9.  Cuenta Banco Santander (si no tiene, se abre durante el proceso)
  10. Carta Laboral del empleo más reciente
  11. Hoja de semanas cotizadas IMSS (descarga en IMSS Digital)

  Si incompletos: Freddy notifica qué falta. Plazo 48h.
  Si no llegan en 48h: candidato se pausa en cartera (no se descarta).

--------------------------------------------------------------------------------
FESTIVOS BLOQUEADOS EN CALENDLY (pestaña 7_Festivos)
--------------------------------------------------------------------------------

  16 septiembre   Día de la Independencia
  2 noviembre     Día de Muertos
  16 noviembre    (por confirmar)
  25 diciembre    Navidad

--------------------------------------------------------------------------------
DETONADOR — 8_Plantillas (nuevo modelo: correo de baja)
--------------------------------------------------------------------------------

PROCESO:
  1. GG de sucursal detecta una baja en su equipo
  2. GG envía correo a Abraham (RRHH) con copia OBLIGATORIA a
     reclutamiento@hapd.mx
  3. Formato estandarizado requerido:
       Asunto:  Baja [Nombre Empleado] — [Sucursal]
       Cuerpo:  Puesto: [nombre exacto del puesto]
                Sucursal: [nombre de la tienda]
                Fecha efectiva de baja: [fecha]
  4. Cowork lee reclutamiento@hapd.mx, detecta el correo de baja
  5. Cowork actualiza automáticamente col. G (Plantilla_Actual) en
     8_Plantillas restando 1 a la posición/sucursal correspondiente
  6. Fórmula H recalcula Vacantes_Abiertas automáticamente
  7. Si H > 0 y col. I = SI → col. J muestra 🔴 PUBLICAR
  8. Cowork notifica al auxiliar → auxiliar publica en plataformas

  REGLA: Si el correo no tiene el formato correcto, Cowork no lo procesa
  y envía alerta a Cris para revisión manual.

COLUMNAS DEL SHEETS:
  F: Plantilla_Ideal    Fija — NO editar. La define Dirección.
  G: Plantilla_Actual   Cowork actualiza automáticamente vía correo de baja.
  H: Vacantes_Abiertas  =MAX(0, F-G)
  I: Activa             SI/NO — OPS pausa o activa manualmente si es necesario
  J: Detonador          =SI(Y(H>0,I="SI"),"🔴 PUBLICAR","✅ OK")

================================================================================
4. INFRAESTRUCTURA TÉCNICA — ESTADO ACTUAL
================================================================================

  Herramienta                   Estado           Notas
  WhatsApp Business API         ACTIVO           Inbound ilimitado. Outbound 250/día.
  ManyChat Pro                  ACTIVO           Trial hasta ~20 mayo 2026
                                                 DECIDIR: anual $29 vs mensual $39
  reclutamiento@hapd.mx         ACTIVO           Titan. POP3 en supportcenter
  ai@hapd.mx                    ACTIVO           Edgar confirmó creación
  supportcenter.hapd@gmail.com  ACTIVO           Cuenta raíz Drive + Google One
                                                 AI Premium ($20 USD/mes)
  Google Calendar Entrevistas   ACTIVO           Compartido con Diego y Erick
                                                 PENDIENTE: acceso auxiliar
  Calendly                      ACTIVO           https://calendly.com/reclutamiento-hapd/30min
  GastroJobs — Data Maestro     ACTIVO           Google Sheets. Conexión ManyChat activa.
  Indeed                        EN PROCESO       Cuenta creada. Config. pendiente.
  GitHub corporativo            ACTIVO           User: freddybot86 / hapd-ecosistema
  VSCode                        ACTIVO           Servidor Vapiano Reforma
  Verificación empresa Meta     PENDIENTE        No bloqueador para el piloto
  Filtros Gmail reenvío         PENDIENTE        Chef/GG/operativo → entrevistador
  Flujo ManyChat Fase 1         PENDIENTE        Construcción siguiente sesión
  Flujo ManyChat Fase 2         PENDIENTE        Preguntas por definir
  App web de pruebas            POR CONSTRUIR    Claude Code
  n8n                           FUTURO           Servidor Reforma — escala eventual

CALENDLY — CONFIGURACIÓN VIGENTE:
  URL:       https://calendly.com/reclutamiento-hapd/30min
  Duración:  30 min  /  Buffer: 15 min  /  Plataforma: Google Meet
  Anticipación mín.: 4h  /  Rango: 15 días
  Lunes: 14-19h  /  Mar/Mié/Vie: 9-13h y 14-17h  /  Jue: 14-17h
  Sábado: 9-13h  /  Domingo: Cerrado
  Festivos pendientes de bloquear: 16 sep, 2 nov, 16 nov, 25 dic

NÚMERO WHATSAPP:
  +52 56 4871 3095  /  ID WA Business: 1687295028969623
  Chip corporativo virgen  /  Categoría BM: Servicios profesionales
  USO: EXCLUSIVO reclutamiento. Nunca mezclar.

================================================================================
5. FLUJO COMPLETO DEL PROCESO — VERSIÓN 3.0
================================================================================

ARQUITECTURA DE 4 FASES:

  Fase 1  Información + filtro de expectativas    ManyChat — CONSTRUIR
  Fase 2  Perfil del candidato + solicitud        ManyChat — PENDIENTE (preguntas por definir)
  Fase 3  Pruebas psicométricas                   App web — POR CONSTRUIR
  Fase 4  Entrevistas                             Auxiliar + Entrevistador final

--------------------------------------------------------------------------------
DETONADOR DE PUBLICACIÓN (previo a Fase 1)
--------------------------------------------------------------------------------

GG notifica baja por correo → Cowork lee → actualiza 8_Plantillas
→ columna J detecta 🔴 PUBLICAR → Cowork notifica a auxiliar
→ auxiliar publica en plataformas de 3_Canales según nivel del puesto
→ candidatos ven el anuncio → escriben al WhatsApp → inicia Fase 1

--------------------------------------------------------------------------------
FASE 1 — INFORMACIÓN + FILTRO DE EXPECTATIVAS
--------------------------------------------------------------------------------

OBJETIVO: Que el candidato conozca todo sobre el puesto y la empresa antes
de seguir. La mayoría se descarta sola aquí. Evitamos que lleguen candidatos
que no encajan por sueldo, distancia u horario.

FUNCIONAMIENTO:
  Freddy presenta la oferta completa: empresa, puesto, sueldo, tienda,
  horarios (incluyendo nocturnos), condiciones, prestaciones.
  Toda esta información la toma de la hoja 0_Clientes del DataMaestro.

  El candidato puede hacer preguntas en cualquier momento.
  Freddy responde con lo que tenga en 0_Clientes. Si no lo sabe, lo dice.

  Al terminar la presentación, Freddy hace 3-4 preguntas de confirmación:
    - ¿El sueldo se ajusta a lo que necesitas?
    - ¿La sucursal [X] te queda accesible?
    - ¿Puedes trabajar en turnos nocturnos / fines de semana?
    - (las preguntas exactas se definen al construir el flujo)

  Rama NO → encuesta de abandono (motivo: sueldo / distancia / horario /
             no le interesó el proyecto) → datos al reporte.
  Rama SÍ → avanza a Fase 2.

--------------------------------------------------------------------------------
FASE 2 — PERFIL DEL CANDIDATO + SOLICITUD
--------------------------------------------------------------------------------

ESTADO: POR DEFINIR Y CONSTRUIR en sesión dedicada.

Lo que se sabe:
  - Habrá preguntas para perfilar al candidato
  - El candidato llenará la solicitud de empleo (cuestionario en línea)
  - Las preguntas se construyen desde cero — no se basan en ningún proceso anterior
  - Se define en la próxima sesión de trabajo de Freddy

  Rama NO pasa → encuesta de abandono → datos al reporte.
  Rama SÍ pasa → avanza a Fase 3.

--------------------------------------------------------------------------------
FASE 3 — PRUEBAS PSICOMÉTRICAS (App Web)
--------------------------------------------------------------------------------

ESTADO: POR CONSTRUIR con Claude Code.

ARQUITECTURA DEFINIDA:
  Plataforma:  App web con Claude Code. Sin software externo. Sin costo
               por aplicación. Sin respuestas disponibles en YouTube.
  Acceso:      Link de un solo uso por WhatsApp y correo. Si se cierra, se bloquea.
  Tiempo:      Timer por pregunta (30-60 seg). No se pausa.
  Resultados:  Se envían automáticamente al terminar → Cowork evalúa
               vía skill psicométrico → veredicto automático

PRUEBAS:
  ZAVIC — valores e integridad (OBLIGATORIO — todas las posiciones)
    Legalidad ALTO / Moral ALTO / Indiferencia bajo / Corrupción MUY BAJO
    Si ZAVIC sale mal → DESCARTE INMEDIATO. Sin excepción.

  DISC / Cleaver — estilo conductual (todas las posiciones)
    D alto → GG, Chef
    I alto → Mesero, Hostess, Gerente de Servicio
    S alto → Ayudante Cocina, Dish
    C alto → Sous Chef, Ayudante Barra
    No hay perfiles incorrectos — el criterio es compatibilidad puesto-persona.

  Big Five BFQ — personalidad (solo puestos gerenciales)
    Responsabilidad ALTO / Estabilidad Emocional ALTO
    Escala L para detectar respuestas socialmente deseables.

  Rama NO → candidato queda en cartera con estatus pausado.
  Rama SÍ → avanza a Fase 4.

--------------------------------------------------------------------------------
FASE 4 — ENTREVISTAS
--------------------------------------------------------------------------------

CONDICIÓN DE ENTRADA — solo llegan candidatos que:
  ✓ Aceptaron las condiciones del puesto (Fase 1)
  ✓ Completaron solicitud y perfil (Fase 2)
  ✓ Entregaron los 11 documentos
  ✓ Pasaron las pruebas psicométricas (Fase 3)

ENTREVISTA 1 — Auxiliar:
  Conduce la entrevista por Google Meet con script fijo. Sin improvisar.
  Gemini transcribe automáticamente.
  Cowork (skill análisis-entrevista) analiza transcript → veredicto.
  Si pasa → ManyChat agenda Entrevista 2 vía Calendly.

ENTREVISTA 2 — Entrevistador final:
  Entrevistador según 4_Entrevistadores del DataMaestro.
  Gemini transcribe. Cowork genera Perfil Final.
  Decisión final: Cris.
  Si aprobado → Freddy notifica a Abraham. Expediente: CONTRATADO.

TODO CANDIDATO QUE PASA FASE 1 Y ENTREGA DOCUMENTOS entra a
9_Cartera_Candidatos aunque no haya vacante en ese momento.

================================================================================
6. BATERÍA DE PRUEBAS — ARCHIVOS DE REFERENCIA
================================================================================

  Archivo                           Uso
  125 - Test de ZAVIC.rar           App pruebas (PRIORITARIO)
  084 - Test de Cleaver (1).rar     App pruebas (PRIORITARIO)
  Disc_Candidatos.xlsx              App pruebas + skill psicométrico
  DISC_Teoría_(1).pptx              Referencia skill psicométrico
  003 - Big Five (BFQ).rar          App pruebas (gerenciales)
  Perfiles 2025.xlsx                Skill perfiles de puesto
  Entrevista DT GG.pdf              Referencia script entrevista
  Entrevista DT CHEF.pdf            Referencia script entrevista
  Entrevista DO GG.pdf              Referencia script entrevista
  Formula 1 GG - copia.xlsx         Referencia scoring
  Formula 1 G-C.xlsx                Referencia scoring
  CARTA COMPROMISO EXCELENCIA.docx  Fase contratación — Abraham
  PERFIL GERENTE DE SERVICIO.docx   Skill perfiles
  Perfil Mesero.pdf                 Skill perfiles
  PERFIL DE SOUS CHEF.pdf           Skill perfiles
  Perfil Ayudante de cocina.pdf     Skill perfiles

================================================================================
7. MODELO OPERATIVO — FREDDY + AUXILIAR
================================================================================

  Acción                         Ejecutor                  Nivel
  Publicar vacantes              Auxiliar                  Manual (Freddy genera copy)
  Leer correo de baja            Cowork                    Automatizado
  Actualizar 8_Plantillas        Cowork                    Automatizado
  Recepción WA candidatos        Freddy                    Automatizado
  Consulta disponibilidad        Freddy → Sheets           Automatizado (nativo)
  Fase 1 — Info + confirmación   Freddy                    Automatizado
  Encuesta abandono              Freddy                    Automatizado
  Fase 2 — Perfil + solicitud    Freddy                    Automatizado
  Verificar documentos           Cowork                    Automatizado
  App de pruebas                 Candidato (link único)    Automatizado
  Evaluación pruebas             Skill psicométrico        Automatizado
  Entrevista 1                   Auxiliar (script fijo)    Auxiliar + Gemini transcribe
  Análisis Entrevista 1          Skill análisis-entrevista Automatizado
  Agendar Entrevista 2           Freddy + Calendly         Automatizado
  Recordatorios candidato        Freddy WA + email         Automatizado
  Entrevista 2                   Entrevistador final       Humano + Gemini transcribe
  Perfil Final                   Freddy                    Automatizado
  Decisión final                 Cris                      Humano
  Alerta a Abraham               Freddy                    Automatizado
  Reporte semanal                Skill reporte-analytics   Automatizado
  Brief matutino                 Freddy → Cris             Automatizado

PERFIL DEL AUXILIAR (tentativa: Jessica Ávila):
  - Publicar vacantes con el copy que genera Freddy
  - Conducir entrevistas 1 por Google Meet con script fijo
  - Apoyo logístico puntual
  NO requiere conocimiento de psicología ni criterio de selección propio.

================================================================================
8. SKILLS — ESTADO ACTUAL (TODOS CONSTRUIDOS)
================================================================================

  Skill                  Función
  orchestrator           Director de orquesta — coordina todos los skills
  reclutador             Estrategia de selección y criterios por puesto
  psicometrico           Evalúa resultados ZAVIC / DISC / Big Five
  analisis-entrevista    Analiza transcripts y genera veredicto
  reporte-analytics      Reporte semanal del proceso de reclutamiento
  manychat               Construcción y lógica de flujos ManyChat
  copywriter             Genera copy de anuncios por plataforma
  experto-fb             Estrategia Facebook / Meta
  legal-laboral          Consultas de derecho laboral aplicadas al proceso
  canvas-design          Diseño visual de materiales
  tecnico-mantenimiento  Soporte para perfiles de mantenimiento corporativo
  skill-creator          Crear y optimizar nuevos skills

================================================================================
9. ESTRUCTURA GOOGLE DRIVE
================================================================================

  01_Vapiano México / 02_Claude / Talento /
    01_Perfiles_de_Puesto
    02_Vacantes_Activas         (referencia al DataMaestro — no duplicar)
    03_Candidatos
        [Nombre_Candidato_Posicion_Fecha]
            documentos / resultados pruebas / transcripts / perfil final
    04_Evaluaciones             (app web + formatos referencia)
    05_Anuncios                 (activos + históricos)
    06_Reportes                 (reporte semanal por fecha)
    07_Procesos_y_Politicas     (Política Ingreso Centralizado 2026)
    GastroJobs — Data Maestro.gsheet  ← fuente de verdad de datos
    Claude.md                         ← este documento

  01_Vapiano México / 02_Claude / RRHH /
    Responsable: Abraham Fósil — independiente de Talento

PERMISOS:
  supportcenter.hapd@gmail.com  Propietaria. Solo Cris.
  Auxiliar                      Solo 01_Operaciones/Talento
  Abraham                       Solo RRHH
  Diego, Erick                  Solo Google Calendar entrevistas

================================================================================
10. PENDIENTES ORDENADOS
================================================================================

RESUELTOS:
  [OK] Edgar — ai@hapd.mx creado
  [OK] Edgar — POP3 apunta a reclutamiento@hapd.mx
  [OK] DataMaestro migrado a Google Sheets
  [OK] Conexión ManyChat ↔ Google Sheets (nativa activa)
  [OK] Skills del ecosistema construidos

BLOQUEADOR INMEDIATO:
  [ ] Decidir plan ManyChat antes del 20 mayo — anual $29 vs mensual $39

INFRAESTRUCTURA:
  [ ] Configurar filtros reenvío Gmail (Chef/GG/operativo → entrevistador)
  [ ] Bloquear festivos en Calendly: 16 sep, 2 nov, 16 nov, 25 dic
  [ ] Configurar Indeed vía Claude en Chrome
  [ ] Agregar Daniel Askenazi como admin del BM GastroJobs
  [ ] Resolver acceso Google Calendar para auxiliar
  [ ] Definir formato oficial del correo de baja y comunicarlo a todos los GGs
        Asunto: Baja [Nombre] — [Sucursal]
        Cuerpo: Puesto / Sucursal / Fecha efectiva de baja
        Copia obligatoria: reclutamiento@hapd.mx

CONSTRUCCIÓN — ORDEN ESTRICTO:
  [ ] Poblar hoja 0_Clientes con toda la info disponible de las marcas
  [ ] Construir automatización Cowork: leer correo de baja → actualizar 8_Plantillas
  [ ] Construir Fase 1 en ManyChat:
        bienvenida → presentación oferta (desde 0_Clientes) →
        preguntas de confirmación → rama Sí/No → encuesta abandono
  [ ] Definir y construir Fase 2: preguntas de perfil + solicitud
  [ ] Construir app web de pruebas (ZAVIC + DISC + Big Five) con Claude Code
  [ ] Construir script de entrevista 1

PERSONAS:
  [ ] Confirmar si Jessica Ávila acepta el rol de auxiliar
  [ ] Verificación empresa Meta (no urgente)

DATAMAESTRO — PENDIENTES INTERNOS:
  [ ] Confirmar datos HST en 0_Clientes (horarios sucursales, dirección SC)
  [ ] Definir compensación LUC, HST, SC en 1_Posiciones (Abraham)
  [ ] Verificar si 5 Gerentes Administrativos SC son mismo puesto o distintos

================================================================================
11. CONTACTOS CLAVE
================================================================================

  Rol                           Persona              Contacto
  Dueño operativo (temporal)    Cristóbal Salinas    cristobal@hapd.mx
  Auxiliar (tentativa)          Jessica Ávila        gerente adm. Carso
  Entrevistador Chef/Sous       Erick Campuzano      chefcorporativo@fac.mx
  Entrevistador GG/GteServicio  Diego López          d.lopez@fac.mx
  Entrevistador puestos piso    GG de cada tienda    por tienda
  Entrevistador Mantenimiento   Julio Flores         construccion@fac.mx
  Contratación (RRHH)           Abraham Fósil        por confirmar
  GG Carso                      Victor Rodríguez     mexico1@fac.mx
  GG Samara                     Daniel Estrada       mexico2@fac.mx
  GG Reforma                    Pamela Antonio       mexico3@fac.mx
  GG Tlalnepantla               Juan Silva           mexico5@fac.mx
  GG Vallejo                    Gustavo Ordoñez      mexico6@fac.mx
  GG Luchito                    Laura Tello          mexico6@fac.mx
  IT / Servidor                 Edgar                Basecamp: Daniel López
  CEO                           Daniel Askenazi      Dirección
  Cuenta raíz Drive             supportcenter.hapd@gmail.com

================================================================================
12. PRINCIPIOS NO NEGOCIABLES
================================================================================

1. Freddy filtra, agenda, analiza y reporta. El auxiliar ejecuta lo que
   Freddy no puede. El sistema no depende de ninguna persona en particular.

2. El detonador es el correo de baja, no una persona.
   GG notifica → Cowork lee → Sheets se actualiza → flujo arranca.

3. Las publicaciones son evergreen. ManyChat redirige según disponibilidad real.

4. La cartera de candidatos es un activo estratégico. Cada candidato que pasa
   Fase 1 y entrega documentos entra, aunque no haya vacante.
   Visión: GastroJobs como servicio al sector.

5. Talento y RRHH son áreas distintas. El flujo termina al entregar a Abraham.

6. Las pruebas son nuestras. App con Claude Code. ZAVIC + DISC + Big Five.
   Sin software externo. Sin respuestas en YouTube.

7. Un número por caso de uso. 56 4871 3095 es exclusivo reclutamiento.

8. El correo de reclutamiento es reclutamiento@hapd.mx. Único. Siempre.

9. Ningún activo digital en cuentas personales. El sistema sobrevive a la
   rotación de cualquier persona — incluyendo a quien lo construyó.

10. Los datos operativos viven en el Sheets. El Sheets tiene prioridad
    sobre cualquier documento de texto, incluyendo este.

11. La hoja 0_Clientes es viva. Crece con uso real. Freddy mejora con
    cada interacción que no supo responder.

12. La encuesta de abandono es inteligencia. Cada candidato que sale aporta
    datos para mejorar anuncios, condiciones y respuestas del bot.

================================================================================
FIN DEL DOCUMENTO — v7.2
================================================================================
PRÓXIMA SESIÓN EN COWORK (servidor Vapiano Reforma):
  1. Leer este documento completo al inicio
  2. Revisar pendientes — Sección 10
  3. Poblar hoja 0_Clientes del DataMaestro
  4. Construir automatización correo de baja → 8_Plantillas
  5. Construir Fase 1 en ManyChat
  6. Fase 2 y app de pruebas: sesiones siguientes

ARCHIVOS QUE DEBEN ESTAR EN EL SERVIDOR ANTES DE ARRANCAR:
  - Este documento (Claude.md)
  - GastroJobs — Data Maestro.gsheet (acceso vía supportcenter.hapd@gmail.com)
  - 125 - Test de ZAVIC.rar (extraído)
  - 084 - Test de Cleaver (1).rar (extraído)
  - 003 - Big Five (BFQ).rar (extraído)
================================================================================
