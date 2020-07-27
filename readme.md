# RegEx Replace

Busca cadenas de texto en una lista de archivos y remplázalas utilizando expresiones regulares

## Instalación

```
npm install
```

_Es necesario tener NodeJS_

## Documentación

### Modo de uso

- Ubicar los archivos a procesar en la carpeta **replace/**
- Abrir la Línea de Comandos en el root de la herramienta
- Ejecutar la siguiente línea de comando:

```
npm start
```

- Los nombres de los archivos procesados aparecerán listados en la consola
- Aquellos que fueron modificados se verán pintados en verde
- Los que no tuvieron modificaciones se verán pindatos en gris
- Los archivos procesados serán guardados en la carpeta **processed/**

### Desarrollo

#### Dependencias

```
  "devDependencies": {
    "chalk": "^1.1.3",
    "fs-extra": "^3.0.1"
  }
```

#### Archivos

```
./processed/
./replace/

.gitignore
package.json
readme.md
regEx.js
scripts.js
```

#### regEx.js

Contiene un array de arrays con las expresiones regulares a reemplazar y su remplazo

```
const regEx = [
	[/Replace/mi, 'Processed']
]
```

#### scripts.js

Contiene la función **replace()** que hace lo siguiente:

- Borra la carpeta **processed/** con **fs.removeSync**
- Recorre los archivos ubicados en **replace/** con **fs.readdirSync**
- Lee el contenido de cada archivo con **fs.readFileSync**
- Por cada array en **regEx.js** ejecuta un bucle **while**
- Siempre que haya un **match** de la cadena a buscar aplica un **replace** de la cadena a reemplazar
- Si hubo **match** el archivo es guardado en la carpeta **processed/**