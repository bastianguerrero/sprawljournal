---
layout: layout.njk
title: "Construyendo un pipeline de datos con Python desde cero"
date: "2026-10-12"
tags: articulo
categoria: "Datos"
clase: "datos"
emoji: "🐍"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "Jefe de Proyectos TI"
lectura_tiempo: "3 min"
descripcion: "Extracción, transformación y carga de indicadores económicos chilenos con Python, pandas y SQLite. Sin frameworks enterprise."
---

Después de titularme quise meterme en serio al mundo de los datos. La mejor forma de aprender: construir algo real.

## El proyecto

Un pipeline que toma indicadores económicos chilenos, los limpia y los deja listos para consultar. Corre en mi Mac con Python, pandas y SQLite.

## Las tres fases

- **Extract:** traer los datos desde la fuente con requests.
- **Transform:** limpiar tipos, fechas y valores faltantes con pandas.
- **Load:** guardar el resultado en SQLite.

## Lo que aprendí

Partir simple. Un pipeline que corre de punta a punta, aunque sea feo, enseña más que diez diagramas de arquitectura.
