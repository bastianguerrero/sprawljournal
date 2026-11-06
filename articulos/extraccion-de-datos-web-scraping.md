---
layout: layout.njk
title: "Cuando no existe una API podemos obtener a lo bruto"
date: "2026-11-02"
tags: articulo
categoria: "Desarrollo"
clase: "dev"
emoji: "⛏️"
autor: "Bastián Guerrero"
autor_iniciales: "BG"
autor_cargo: "PMO TI"
lectura_tiempo: "5 min"
descripcion: "Ocupando WebScraping para obtener datos del Servicio Sismológico de Chile"
---

# Extracción de Datos (Web Scraping)

El primer cacho con el que nos topamos fue conseguir datos sísmicos frescos y de una fuente confiable. ¿La mejor opción? Obvio que el Centro Sismológico Nacional (CSN) de la Universidad de Chile (sismologia.cl). La misión era simple sobre el papel: armar un script en Python que fuera capaz de leer automáticamente la tabla de "Últimos Sismos" de su portada sin tener que andar entrando a mano a cada rato.
## Las herramientas de combate
Para esta tarea no inventamos la rueda, tiramos de lo clásico y eficiente en el ecosistema de Python:
* **Python:** El lenguaje base para orquestar todo el invento.
* **Requests:** Para tirar peticiones HTTP y bajarnos todo el código HTML de una pura pasada.
* **BeautifulSoup:** El encargado de parsear y navegar por esa sopa de etiquetas HTML hasta encontrar la aguja en el pajar.
* **Pandas:** Para ordenar la casa, estructurar los datos extraídos y dejarlos limpios en un DataFrame fácil de manipular.

⠀El proceso paso a paso
1. **Bajarse el HTML:** El script se conecta directo a [https://sismologia.cl](https://sismologia.cl) y se trae todo el código fuente de la página.
2. **Analizar la estructura:** Levantamos un objeto de BeautifulSoup para convertir ese texto plano en una estructura navegable.
3. **Cazar la tabla:** Usando el método find(), fuimos derecho a buscar la tabla precisa que contenía los datos.Inspeccionando el código de la página nos dimos cuenta de que venía etiquetada con la clase sismologia.
4. **Recorrer y extraer:** El script barre cada fila (<tr>) de la tabla —saltándose la primera porque es pura cabecera informativa— y rescata el texto plano de cada celda (<td>).
5. **Limpieza quirúrgica de datos:** Acá hubo una pequeña pifia inicial de formato. La primera celda traía la fecha y el lugar pegados, separados por un salto de línea (<br>). Con un simple get_text(separator='|') cambiamos esa separación por una barra vertical (|), y usando un toque de str.split('|') con Pandas separamos esa única columna en dos de forma limpia: "Fecha Local" y "Lugar".

⠀
### Código Final de Scraping

Python
```
import requests
from bs4 import BeautifulSoup
import pandas as pd

def obtener_ultimo_sismo_df():
    url = 'https://sismologia.cl'
    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.exceptions.RequestException:
        return None

    soup = BeautifulSoup(response.text, 'html.parser')
    tabla_sismos = soup.find('table', class_='sismologia')
    if not tabla_sismos: return None

    primera_fila = tabla_sismos.find_all('tr')[1]
    if not primera_fila: return None

    celdas = primera_fila.find_all('td')
    fecha_lugar = celdas[0].get_text(separator='|', strip=True)
    profundidad = celdas[1].get_text(strip=True)
    magnitud = celdas[2].get_text(strip=True)

    df = pd.DataFrame([[fecha_lugar, profundidad, magnitud]], columns=['Fecha Local / Lugar', 'Profundidad', 'Magnitud'])
    df[['Fecha Local', 'Lugar']] = df['Fecha Local / Lugar'].str.split('|', n=1, expand=True)
    return df[['Fecha Local', 'Lugar', 'Profundidad', 'Magnitud']]

```
