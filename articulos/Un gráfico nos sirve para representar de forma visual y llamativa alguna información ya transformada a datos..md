---
layout: layout.njk
title: "Un buen Gráfico puede esconder un desastre"
date: 2026-11-04
tags: articulo
categoria: "Gestión de Proyectos"
clase: "gestion"
emoji: "📈"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "PMO TI"
lectura_tiempo: "8 min"
descripcion: "Antes de mostrar un gráfico analiza sus Datos"
---
# Un gráfico nos sirve para representar de forma visual y llamativa alguna información ya transformada a datos.
Pero seamos sinceros: a veces ese monito lleno de colores, curvas ascendentes y flechas verdes lo único que hace es esconder la escoba que hay debajo de la alfombra.
## Tres preguntas antes de empezar
1. **¿Un gráfico realmente necesita explicación?** Por lo general, en todos los cursos y manuales de gestión se nos llena la boca diciendo que los gráficos deben ser autoexplicativos. Pero veamos la realidad: ¿cómo una flamante curva S de entregables no va a necesitar una bajada de suelo para no vender espejitos de colores?
2. **¿Un gráfico puede sostenerse solo o necesita ir acompañado de otros KPIs?** Cuando te toca contextualizar los datos fríos de una operación real, te das cuenta de que mirar un solo indicador es como manejar con los ojos vendados: tarde o temprano te vas a estrellar contra expectativas erróneas.
3. **¿Se premia el sobreavance o se castiga el desvío de lo planificado?** En el calor de una reunión de seguimiento corporativa, lo que de verdad importa mostrar es el dato ácido, sin anestesia. Solo así se pueden tomar decisiones reales, en vez de celebrar aplausos de mentira.
—-

## Contexto de una mañana cualquiera
Son las 11:30 AM y arranca la clásica reunión de seguimiento de un proyecto pesado. De esos que exigen la participación de todo el negocio, movilizando a los famosos y esquivos "usuarios validadores". Repasamos lo de siempre: compromisos de la semana anterior, estatus global del proyecto, resúmenes ejecutivos y las diapositivas de rigor.
El flamante resumen ejecutivo indica una desviación positiva de un **+7%**. Las cifras gordas muestran que para esta semana estaba planificado terminar la migración de 90 reportes críticos. El número real nos dice que llevamos **107 de 90**.O sea, a simple vista, los números son alegres y vamos ganando por goleada en el consolidado.
Pero el castillo de naipes se empieza a caer cuando alguien hace un simple doble clic con preguntas incómodas:
* ¿Cuántos de esos reportes fueron efectivamente validados por el negocio la semana pasada?
* ¿Por qué diablos aparecen 59 reportes con atraso acumulado si se supone que todas las mediciones del proyecto van en verde positivo?

⠀Es ahí, en ese preciso instante, donde empieza la verdadera explicación y se desarma la magia del gráfico bonito.
Resulta que, hasta la semana pasada, el negocio tenía la obligación de validar 67 reportes específicos. ¿Saben cuántos de esos 67 fueron tocados? Solo **8**.
* 8 reportes se marcaron tibiamente en estado "No necesita migración".
* 1 solo reporte quedó en estado "Con Observaciones".

Hagan los cálculos: **apenas un 25% de los reportes planificados recibieron alguna respuesta real por parte de los usuarios.** El resto, silencio absoluto.
—-

## Pero entonces... ¿por qué los números generales del proyecto se ven tan bien?
Aquí está la trampa del indicador mal enfocado. Los números se ven bonitos porque los usuarios —a quienes se les indicó que debían mantener un ritmo de respuesta para esa semana específica— decidieron sintonizar con la ley del mínimo esfuerzo inteligente: se pusieron a abordar trabajo futuro. Empezaron a revisar reportes que estaban calendarizados para apagarse o validarse recién en dos meses más.
El problema metodológico es grave: esos pocos usuarios aplicados que adelantaron pega **apenas representan un 15% del universo total de usuarios** que realmente debían validar los reportes migrados de la semana en curso. Es decir,tapamos un hoyo cavando otro más grande en un lugar donde nadie lo había pedido todavía.
Muchos en los pasillos de la gerencia podrán decir sin remordimiento que falló la gestión de control y gestión de cambios (GdC). Yo discrepo en un 80% con esa lectura superficial, y tengo pruebas de por qué no fue un problema de falta de esfuerzo:
* **Talleres y cuadratura:** Se armaron rondas completas de talleres para la cuadratura de reportes, e incluso nos dimos el trabajo de construirlos desde cero junto al usuario si alguien quería meter mano en el modelo.
* **WorkShops intensivos:** Se desplegó una ronda completa de workshops durante una semana entera, cubriendo turnos de mañana y tarde para no dejar a nadie fuera.
* **Comunicados a la medida:** Los correos de difusión no eran masivos ni fríos; estaban personalizados por área y la bajada de contacto se gestionó directamente pidiendo apoyo a los Gerentes Corporativos.
* **Cápsulas y soporte visual:** Grabamos y distribuimos cápsulas audiovisuales súper didácticas sobre cómo ocupar la App que nosotros mismos desarrollamos para que el usuario pudiera dar estatus al estado de su reporte sin enredarse.
* **Automatización masiva:** El proyecto entero automatizó el envío de más de 100 correos personalizados a los usuarios, explicando el paso a paso, listando sus reportes uno a uno y detallando las fechas límites de validación con manzanitas.

⠀Entonces, ¿dónde está el fallo? No es la herramienta, no es la comunicación, no es la capacitación. Es la desconexión entre el indicador macro que le gusta ver a los altos mandos y la cruda realidad operativa de la trinchera.
—-
## Pasos a Seguir: Cómo dejar de engañarnos con gráficos de colores
Para enderezar el rumbo y evitar que la gestión se convierta en una fábrica de métricas de humo, debemos implementar correctivos claros y directos en la gobernanza del proyecto:
### 1. Desacoplar el Avance Técnico del Avance Funcional
No podemos seguir sumando peras con manzanas. Que el equipo de desarrollo entregue 107 reportes migrados en la terminal es una métrica técnica excelente, pero vale cero si el negocio no los valida. A partir de ahora, el avance del proyecto se medirá estrictamente sobre los hitos cerrados y firmados por el usuario final, no sobre código acumulado en el repositorio.
### 2. Congelar el Sobreavance Innecesario
Hay que ponerle un freno de mano a la validación anticipada de reportes futuros. Si el usuario se está saltando la tarea crítica de esta semana para avanzar en la de dos meses más solo para que su barra personal se vea bonita, hay que reconducir su foco. Los recursos de atención deben concentrarse quirúrgicamente en destrabar la cola de validación atrasada.
### 3. Sincerar el KPI Ácido ante los Comités
En las reuniones de seguimiento con la plana ejecutiva se acabó el mostrar solo el "+7%" de color verde. Se presentará la matriz real de adherencia por área (ejemplo: *"Área Operaciones tiene un 15% de cumplimiento real"*). El dato duele, sí,pero expone el cuello de botella donde realmente importa para destrabar apoyos gerenciales de peso.
### 4. Ventanas de Validación Asistida (Cero Fricción)
Si el usuario final no entra a la App o le da lata responder los correos automatizados, dejemos de depender de la buena voluntad asíncrona. Implementaremos "células de choque": sesiones presenciales o virtuales obligatorias de 20 minutos donde un miembro del equipo técnico se sienta codo a codo con el validador para limpiar la bandeja de reportes en caliente.
Al final del día, un gráfico elegante puede comprarte aplausos por diez minutos en una sala de reuniones, pero una gestión basada en datos reales es la única que te salva el proyecto antes de que explote en producción.

—-
