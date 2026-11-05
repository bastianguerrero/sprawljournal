---
layout: layout.njk
title: "Web scraping para alimentar un pipeline: lo básico que sí importa"
date: "2026-11-02"
tags: articulo
categoria: "Datos"
clase: "datos"
emoji: "🕷️"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "Jefe de Proyectos TI"
lectura_tiempo: "2 min"
descripcion: "Antes de scrapear una página, hay que hacerse tres preguntas. Buenas prácticas para sacar datos de la web sin quemarse."
---

El scraping es la salida cuando una fuente de datos no ofrece API. Pero no es la primera opción.

## Tres preguntas antes de empezar

1. **¿Existe una API o un archivo descargable?** Casi siempre es mejor que scrapear.
2. **¿Me lo permiten?** Revisa los términos del sitio y su archivo robots.txt.
3. **¿Aguanta el servidor?** Pausas entre peticiones y un User-Agent que te identifique.

## Lo que me ha funcionado

- Guardar el HTML crudo antes de transformarlo, para no repetir la descarga si algo falla.
- Validar los datos al cargarlos: rango de fechas, tipos y valores imposibles.
- Esperar que la página cambie algún día y que el script se rompa.

## Con pandas y requests

Para tablas simples, requests más pandas alcanza. Para estructuras más enredadas, BeautifulSoup.
