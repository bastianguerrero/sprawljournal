---
layout: layout.njk
title: "Lo que aprendí migrando 400 servidores a GCP"
date: "2026-10-03"
tags: [articulo, destacado]
categoria: "Dev / Cloud"
clase: "dev"
emoji: "☁️"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "Jefe de Proyectos TI"
lectura_tiempo: "6 min"
descripcion: "Un lift-and-shift de esta escala tiene más aristas de gestión que técnicas. Lecciones desde el lado del PM, no del arquitecto de soluciones."
---

Migrar entre 400 y 480 servidores de on-premise a GCP con estrategia lift-and-shift suena a problema técnico. En la práctica, es sobre todo un problema de coordinación.

## El alcance

Servidores de Dev, QA y Producción, varios con sistemas operativos legados como Windows Server 2003 o RHEL 2.1. Cada uno trae sus propias sorpresas.

## Mi primera vez del lado del mandante

Siempre había estado del lado del implementador. Cambiar de lado obliga a pensar distinto: qué se le exige al proveedor, cómo se documenta y quién gobierna cada decisión.

## Lo que más pesa

1. Un kick-off que deje claros los roles.
2. Un paquete de documentación definido desde el día uno.
3. Gobernanza simple, con decisiones registradas.
