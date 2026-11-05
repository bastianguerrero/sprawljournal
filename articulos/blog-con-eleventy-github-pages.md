---
layout: layout.njk
title: "Cómo armé este blog con Eleventy y GitHub Pages"
date: "2026-11-04"
tags: articulo
categoria: "Desarrollo"
clase: "dev"
emoji: "🧱"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "Jefe de Proyectos TI"
lectura_tiempo: "3 min"
descripcion: "De HTML suelto a un sitio con layout único y deploy automático. Y la trampa de Jekyll que casi me deja un sitio sin estilos."
---

SprawlJournal partió como un puñado de archivos HTML. Cada página repetía el header y el footer, y cambiar el logo significaba editar todo.

## El salto a Eleventy

Un solo layout, y cada página aporta solo su contenido. Los artículos son archivos Markdown con una cabecera de datos. Cambias el logo en un lugar y se actualiza en todo el sitio.

## La trampa

GitHub Pages usa Jekyll por defecto. Jekyll vio mis archivos con front matter, no encontró el layout y publicó las páginas peladas: sin header, sin estilos y con el listado vacío.

## La solución

En Settings, Pages, cambiar la fuente de despliegue a **GitHub Actions**, para que el workflow compile con Eleventy y publique la carpeta resultante.

## Dos detalles que ahorran dolores de cabeza

- El layout debe vivir en la carpeta _includes.
- Para que las URLs terminen en .html hay que definir el permalink de cada página.
