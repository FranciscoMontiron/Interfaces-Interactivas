# Interfaces-Interactivas

Pong con giroscopio.

El proyecto consiste en un juego de Pong interactivo que utiliza un servidor desarrollado con Node.js, Express y WebSockets. Emplea los datos del sensor de giroscopio del celular para controlar la posición de los jugadores en el juego.

Funcionalidades principales
Utiliza Node.js y Express para crear un servidor web que aloja el juego de Pong.
Incorpora WebSockets para establecer una comunicación en tiempo real entre los dispositivos y el servidor.
Aprovecha los datos del sensor de giroscopio del celular para controlar la posición de los jugadores en el juego Pong.
El archivo pong.html es la interfaz del juego donde se aplican los datos del giroscopio para la interacción.

Requisitos previos
Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde nodejs.org.

Instalación
Clona este repositorio: git clone https://github.com/usuario/nombre-del-repo.git.
Navega hasta el directorio del proyecto: cd nombre-del-repo
Instala las dependencias utilizando: npm install

Para iniciar el servidor, ejecuta el siguiente comando: node server.js

El servidor se iniciará en el puerto 3000.


Acceder al juego desde un dispositivo móvil
Si deseas acceder al juego desde tu dispositivo móvil, asegúrate de estar en la misma red que tu servidor y accede a través de tu navegador utilizando la dirección: https://direccionIPV4:3000.


Acceso al juego desde el navegador local
Si deseas acceder al juego desde el navegador local en tu máquina, utiliza la siguiente dirección:  https://localhost:3000/pong.html.

Si quieres contribuir a este proyecto, sigue estos pasos:

Haz un fork del proyecto
Crea una nueva rama (git checkout -b feature/feature-name)
Haz tus cambios
Haz commit a tus cambios (git commit -am 'Agrega una nueva característica')
Haz push de tu rama (git push origin feature/feature-name)
Crea un pull request.
