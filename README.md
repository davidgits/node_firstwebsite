# Mi primera web con NodeJs y Express

Este es mi primer website usando NodeJs y Express, además de otras tecnologías descritas más abajo.
Este proyecto ha sido desarrollado gracias a Fazt: 
https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA/videos

## Instalación

Inicializa el proyecto y crea el archivo package.json de manera rápida:
```bash
npm init --yes
```

Instalación de módulos necesarios:
- express: framework de NodeJs que nos ayuda a escribir código de servidor con pocas líneas de código, y uso de librerías... etc (similar a jQuery en JavaScript)

- ejs: motor de plantillas, mejora y procesa el Html (código embebido, como php o phyton) usando datos de servidor

- morgan: para poder ver por consola las peticiones al servidor (logs)
```bash
npm i express ejs morgan
```
Lanzar la app:
1ª forma
```bash
node src/index.js
```
2ª forma
definimos en el package.json "main": "index.js" y ejecutamos:
```bash
node src
```
3ª forma
definimos "dev": "node src" en "scripts" dentro del package.json y ahora ejecutamos con:
```bash
npm run dev
```
definimos "start":"node src" y ejecutamos:
```bash
npm start
```
Instalación opcional:
- nodemon: no es un módulo en sí, pero se instala como una dependencia de desarrollo (dependencies) aunque no es necesario para el proyecto, solo sirve para ejecutar en tiempo real los cambios realizados (listening). Para instalar nodemon:
```bash
npm i nodemon -D
```
sustituimos el comando definido en "start" ("node src") por "nodemon src" en el package.json y ejecutamos el nodemon:
```bash
npm start
```



## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)