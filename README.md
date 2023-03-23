# Proyecto Final Beemo
Este es un proyecto final del colegio EDIB, desarrollado por Carlos iglesias Ferriol, este consiste en una aplicación web donde BMO, en la aplicación conocido como Beemo te genera una excusa aleatoria, Beemo tiene implementado un sistema de login, register, contraseña olvidada y logout.

## Tecnologías usadas

* Laravel
  - Laravel Brezze:
sistema de login/register planteado en laravel

  - Mailtrap:
Envia el correo electrónico al clicar en he olvidado la contraseña, asifacilitando el reset de contraseña al usuario

* React
  - React Router DOM:
  libreria para crear las rutas del proyecto con react

   - React Pop up npm:
  Facilita la creación de poup en react

## Como ejecutar el proyecto
  - 1 descargar el .zip del proyecto,
  - 2 abrir la carpeta 'react-breeze-api' en la consola, abrir tambien la carpeta 'test-api' en otra consola
  - 3 instalaremos mediante el comando 'npm i' el paquete NPM en la terminal que tenemos abierto la carpeta 'react-breeze-api'
  - 4 una vez instalado NPM usamos el comando 'npm run dev' para iniciar el proyecto de react
  - 5 necesitamos tener XAMPP y composer instalados en el ordenador
  - 6 en la carpeta de test-api ejecutamos el siguiente comando 'php artisan breeze:install api'
  - 7 vamos a php my admin y creamos una tabla con el nombre 'test-api'
  - 8 abrimos la carpeta test-api en VScode, una vez dentro abrimos el archivo .env y en la parte de DB_PORT= x, deberas poner el puesrto donde tienes phpmyadmin, facil de mirar en xamp
  - 9 una vez tenemos esto ejecutamos el comando 'php artisan migrate' y ya funcionará el sistema de login/register/logout/cambiar contraseña
