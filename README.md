# Login Register with local oauth

Sistema de login y registro con sesión en local. Creación del sistema de backend para recibir los datos de un formulario de login y de registro. Se usa para controlar el acceso al endpoint principal una vez registrado el usuario.

## Background

Proyecto de Backend creado para reto de Nuwe, creación de un sistema de registro y login con ruta protegida para acceso exclusivo para usuarios existentes en la BBDD y logados correctamente.

## Usage

Para usarlo, es necesario realizar consultas a los endpoints descritos en la sección API para realizar la acción deseada a través del verbo HTTP: GET y POST.

Se pone a la escucha el servidor Express, por defecto en el puerto 5000, para la exposición de los endpoints de **'/login'**, **'/register'** y la ruta principal protegida **'/'**. Se ha usado el **ORM Prisma** junto a **MySQL** para la persistencia de datos.

Encontrarás el uso de **_importación de módulos de ES6_**, configurado en el package.json. Se ha realizado con JS funcional y creación de clases para los controladores de datos. El trabajo asíncrono se ha implementado con el uso de **_async/await_** para simplificar y conseguir una mayor legibilidad del código.

## API/Component

Descripción de las rutas expuestas.

### Endpoint: '/'

- **GET** - Ruta protegida por sistema de login, muestra mensaje: _"Login & Register Server"_.

### Endpoint: /login

- **GET** - Supuesta renderización de formulario de Login:

  - Recibe: 
    - Parametros:
  - Devuelve: JSON

```JSON

    {
      "message": "Formulario login"
    }

```

- **POST** - Consulta los datos recibidos del formulario y comprueba que el nombre de usuario y la contraseña sean correctos y redirecciona a la ruta **_'/'_**:

  - Recibe: 
    - Parametros:
      - name
      - password
  - Devuelve:
      - Error: Redirecciona a **'/login'**.
      - Éxito: Redirecciona a **'/'**.

### Endpoint: /register

- **GET** - Supuesta renderización de formulario de Registro:

  - Recibe: 
    - Parametros:
  - Devuelve: JSON

```JSON

    {
      "message": "Formulario registro"
    }
    
```

- **POST** - Si no existe, crea registro en la **BBDD** con el nombre de usuario y password:

  - Recibe: 
    - Parametros:
      - name
      - password
  - Devuelve:
    - Error: Redirecciona a **'/register'**.
    - Éxito: Redirecciona a **'/login'**.

## Installation

Para el correcto funcionamiento se requiere de los siguientes tecnologías:

1. NodeJS [DOCS](https://nodejs.org/es/docs/)
2. Express [DOCS](http://expressjs.com/en/4x/api.html)
3. Prisma [DOCS](https://www.prisma.io/docs)
4. MySQL [DOCS](https://dev.mysql.com/doc/)
5. Git [DOCS](https://git-scm.com/doc)

- Los enlaces a la documentación puede estar desfasada, revisar ultima versión o versión instalada.

Para agilizar el desarrollo se ha utilizado el paquete _nodemon_ que se encuentra en las dependencias de desarrollo del paquete _package.json_.

Para poder instalar todo lo necesario a excepción del servidor MySQL hay que seguir los siguientes pasos:

### \# Clonar repositorio

```shell

git clone https://github.com/raulalhena/nuwe_LoginRegisterlocaloauth.git

```

### \# Instalación

```shell

npm install

```

### \# Creación de archivo .env en el directorio raíz de la app

```shell

touch .env

```

### \# El archivo .env tendrá las siguientes variables:

```shell

DATABASE_URL= [URL DE CONEXION A LA BBDD DE MYSQL ["mysql://[USER]:[PASSWORD]@[HOST]:[BBDD_SERVER_PORT]/[NOMBRE_BBDD]"]]
SRV_PORT= [PUERTO DEL SERVIDOR EXPRESS. POR DEFECTO ["5000"]]
COOKIE_SECRET= [FRASE SECRETA PARA LA ENCRIPTACION DE LA COOKIE DE LA SESION]
SESSION_SECRET= [FRASE SECRETA PARA LA CREACION DE LA SESION DE EXPRESS]

```
### \# Importación tabla _'user'_ una vez creada la BBDD en MariaDB

```shell

mysql -u USUARIO_MYSQL -p NOMBRE_BBDD < ./sql/loginregisterlocaloauth_table_v1.sql

```

### \# Ejecución del servidor

```shell

Modo Desarrollo (con nodemon y morgan): npm run dev
Modo Producción: npm run start

```

## Stack

Los enlaces a la documentación puede estar desfasada, revisar ultima versión o versión instalada.

1. NodeJS [DOCS](https://nodejs.org/es/docs/)
2. Express [DOCS](http://expressjs.com/en/4x/api.html)
3. Prisma [DOCS](https://www.prisma.io/docs)
4. MySQL [DOCS](https://dev.mysql.com/doc/)

## Contact info

Contactame a mi email: **raul.alhena@gmail.com**

## License

GNU General Public License v3.0
[GNU](https://opensource.org/licenses/GPL-3.0)