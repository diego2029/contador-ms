<h1 align="center">Contador de milisegundos</h1>
<p align="left">
   <img src="https://img.shields.io/badge/license-ISC-blue">
   <img src="https://img.shields.io/badge/version-1.0.0-green">
</p>
<h3 align="left">
   Descripción del proyecto
</h3>
<p>
   Es un contador de tiempo en milisegundos de un número dado sobre un array.
</p>

### :hammer: Funcionalidades del proyecto
- `Funcionalidad 1`: Medición de tiempo que tarda en computar un número de acuerdo a un array dado y un número a evaluar.

### 📁 Acceso al proyecto

Clonar el proyecto desde consola o un cliente Git (Github, sourcetree, etc), es un repositorio público no deberías tener inconveniente.

### 🛠️ Abre y ejecuta el proyecto

- Abrir el proyecto en un editor de texto.
- Correr el comando npm install o yarn install.
- Correr el comando "tsc" (hace el build de nuestro proyecto)
- Para hacer test:
   -  Corremos el comando "npm test" o "yarn test".
   -  En el archivo ubicado en la ruta /src/index.test.ts se encuentra un array con diferentes casos de prueba, allí se pueden insertar los que se deseen.
   -  Si se modifíca el archivo de test debemos correr el comando "tsc" y después "npm test" o "yarn test".
- Para correr el archivo individual:
   -  Descomentar del archivo en la ubicación /src/index.ts la ultima linea.
   -  Correr el comando "tsc".
   -  Correr el comando "node /dist/index.js [0,1,2,3,4,5,6,7,8,9] 1234"
      - los ultimos dos valores son el array a recorrer y el número a evaluar (se pueden cambiar a nuestro antojo).
   -  Si queremos hacer de nuevo test debemos comentar la ultima linea del archivo ubicado en /src/index.ts, esto con el fin de que no nos genere error en el test. 
