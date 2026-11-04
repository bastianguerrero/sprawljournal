---
layout: layout.njk
title: "Prompt Engineering para Project Managers: cómo hablarle bien a un LLM"
date: "2026-10-28"
tags: articulo
categoria: "IA"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "Jefe de Proyectos TI"
lectura_tiempo: "8 min"
descripcion: "Los patrones que más sirven en contextos de PMO, planificación y reportería — con ejemplos reales desde el trabajo diario."
---

Los modelos de lenguaje grandes (LLMs) ya están integrados en casi todas las herramientas de gestión que usamos: Copilot en Teams, sugerencias en Monday, resúmenes automáticos en Notion. Pero hay una diferencia enorme entre usar esas features de forma pasiva y saber cómo instruir activamente a un modelo para que haga exactamente lo que necesitas.

Esto es lo que se llama **prompt engineering** — y aunque suena a término de desarrollador, es esencialmente comunicación clara con un sistema que entiende lenguaje natural. Y si algo saben hacer los buenos PMs, es comunicarse con claridad.

## Por qué un PM debería saber esto

Porque las tareas que más tiempo nos consumen — redactar informes, sintetizar actas, generar cronogramas, responder correos de escalación — son exactamente las que un LLM puede ejecutar bien con las instrucciones correctas. El cuello de botella no es el modelo: somos nosotros cuando no sabemos pedirle lo que queremos.

## Los 4 patrones que más uso en PMO

### 1. Rol + Contexto + Tarea
El patrón más básico pero efectivo. En lugar de preguntar "resume esta acta", dile quién eres y para qué sirve el output:

```text
Eres un PM senior en un proyecto de migración cloud.
Contexto: esta es el acta de nuestra reunión de comité de ayer.
Tarea: extrae los 5 acuerdos principales en formato lista, 
con responsable y fecha límite de cada uno.
