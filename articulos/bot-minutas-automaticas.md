---
layout: layout.njk
title: "Automatizando minutas de reunión con IA: mi bot de Microsoft 365"
date: "2026-09-24"
tags: articulo
categoria: "IA"
clase: "ia"
emoji: "🎙️"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "Jefe de Proyectos TI"
lectura_tiempo: "3 min"
descripcion: "Transcripción en tiempo real, extracción de acuerdos y distribución automática. La arquitectura del bot que estoy armando para dejar de perder tiempo en ese ritual."
---

Las minutas son ese ritual que nadie quiere hacer y todos necesitan. Mi idea: que un bot haga el trabajo pesado mientras la reunión ocurre.

## La arquitectura

- **Microsoft Graph API** para entrar a la reunión y leer el calendario.
- **Azure Speech-to-Text** para transcribir en tiempo real.
- **Un LLM** que extrae decisiones, acuerdos y responsables.
- **Planner y SharePoint** para crear las tareas y guardar la minuta.

## Por qué no alcanza solo con Copilot

Copilot resume bien, pero no cierra el ciclo: no crea tareas con responsable ni deja la minuta en el repositorio del proyecto. Ese cierre es justo lo que quería automatizar.

## Lo que viene

Primero transcripción y extracción de acuerdos. Después, tareas automáticas. Una pieza a la vez.
