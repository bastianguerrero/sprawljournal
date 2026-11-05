---
layout: layout.njk
title: "NetWatch: un monitor de red para pymes, construido en seis sprints"
date: "2026-08-28"
tags: articulo
categoria: "Desarrollo"
clase: "dev"
emoji: "📡"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "Jefe de Proyectos TI"
lectura_tiempo: "4 min"
descripcion: "Mi proyecto de tesis: una plataforma SaaS de monitoreo de red para pequeñas empresas chilenas, desarrollada como MVP con Scrum."
---

NetWatch nació como proyecto de tesis en la UNAB: una plataforma de monitoreo de red pensada para las pymes chilenas, que rara vez tienen un equipo de TI dedicado.

## El stack

- **Backend:** FastAPI y PostgreSQL 16, multitenant.
- **Agente:** un demonio en Python con recolectores asíncronos (icmplib, pysnmp, psutil, nmap).
- **Resiliencia:** buffer local en SQLite con WAL, para no perder datos si se cae la conexión.
- **Frontend:** React 18.
- **Alertas:** bot de Telegram.

## Seis sprints, un MVP

Trabajé con Scrum, un sprint a la vez, desde la arquitectura y la matriz de riesgos hasta los manuales de instalación y de usuario.

## Lo que más me gustó

Probar el multitenant con un segundo cliente conectado desde otra red a través de un túnel, y ver llegar la primera alerta real a Telegram.
