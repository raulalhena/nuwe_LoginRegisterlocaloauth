# Login Register with local oauth

Sistema de login y registro con sesión en local. Creación del sistema de backend para recibir los datos de un formulario de login y de registro. Se usa para controlar el acceso al endpoint principal una vez registrado el usuario.

## Background

Proyecto de Backend creado para reto de Nuwe, creación de un sistema de registro y login con ruta protegida para acceso exclusivo para usuarios existentes en la BBDD y logados correctamente.

## Usage

Para usarlo, es necesario realizar consultas a los endpoints descritos en la sección API para realizar la acción deseada a través del verbo HTTP: GET.

Se pone a la escucha el servidor Express, por defecto en el puerto 5000, para la exposición de los endpoints de **/login**, **/register** y la ruta principal protegida **/**. Se ha usado el **ORM Prisma** junto a **MySQL** para la persistencia de datos.

Encontrarás el uso de **_importación de módulos de ES6_**, configurado en el package.json. Se ha realizado con JS funcional y creación de clases para los controladores de datos. El trabajo asíncrono se ha implementado con el uso de **_async/await_** para simplificar y conseguir una mayor legibilidad del código.

## API/Component

Descripción de las rutas expuestas.

### Endpoint: '/' => Ruta protegida por sistema de login, muestra mensaje: _"Login & Register Server"_.

### Endpoint: /login

- **GET** - Supuesta renderización de formulario de Login:

  - Recibe: 
    - Parametros:
  - Devuelve: JSON

- **POST** - Consulta los datos recibidos del formulario y comprueba que el nombre de usuario y la contraseña sean correctos y redirecciona a la ruta **_'/'_**:

  - Recibe: 
    - Parametros:
      - name
      - password
  - Devuelve:
      - Error: JSON

### Endpoint: /register

- **GET** - Supuesta renderización de formulario de Registro:

  - Recibe: 
    - Parametros:
  - Devuelve: JSON

- **POST** - Si no existe, crea registro en la BBDD con el nombre de usuario y password:

  - Recibe: 
    - Parametros:
      - name
      - password
  - Devuelve:
    - Error: JSON

- Estos tres endpoints devuelven el mismo tipo de información:

    - code = Number (Código de estado HTTP: **_200 OK, 400 SOLICITUD INCORRECTA_**).
    - message = String \- Mensaje de éxito **_"success"_** o fallo **_"fail"_**.
    - data = Object \- Objeto con las compañías ordenadas como corresponde a cada endpoint.


      - counter
      - id
      - website
      - name
      - founded
      - size
      - locality
      - region
      - country
      - industry
      - linkedin_url
      - createdAt
      - updatedAt

    **Ejemplo: /api/companies/bysize**

    ```JSON
    JSON:
    {
        "code": 200,
        "message": "success",
        "data": {
            "0": {
                "counter": 256,
                "id": "cb-power-inc-",
                "website":	"careaid.ie",
                "name":	"cb power, inc.",
                "founded":	null,
                "size":	"1-10",
                "locality":	null,
                "region":	null,
                "country":	null,
                "industry":	"wholesale",
                "linkedin_url":	"linkedin.com/company/cb-power-inc-",
                "createdAt":	"2022-11-10T19:09:28.000Z",
                "updatedAt":	"2022-11-10T19:09:28.000Z"
            }
            ...
        }
    }
    ERROR:
    {
        "code": 400,
        "message": "fail",
        "data": null
    }
    ```

## Installation

Para el correcto funcionamiento se requiere de los siguientes tecnologías:

1. NodeJS [DOCS](https://nodejs.org/es/docs/)
2. Express [DOCS](http://expressjs.com/en/4x/api.html)
3. Prisma [DOCS](https://sequelize.org/api/v6/)
4. MySQL [DOCS](https://mariadb.org/documentation/)
5. Git [DOCS](https://git-scm.com/doc)

- Los enlaces a la documentación puede estar desfasada, revisar ultima versión o versión instalada.

Para agilizar el desarrollo se ha utilizado el paquete _nodemon_ que se encuentra en las dependencias de desarrollo del paquete _package.json_.

Para poder instalar todo lo necesario a excepción del servidor MariaDB hay que seguir los siguientes pasos:

### \# Clonar repositorio

```shell
git clone https://github.com/raulalhena/jump2digital22.git
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
HOST=[Nombre o dirección IP del Servidor tanto Web como de BD ["localhost"]]
SRV_PORT=[Puerto de escucha del servidor Web: Express ["3000"]]
DB_USER=[Usuario de la BBDD]
DB_PASSW=[Password de acceso del usuario de la BBDD]
DB_NAME=[Nombre de la BBDD]
DB_DIALECT=[Identificador de Sequelize para el gestor de BBDD que se use. Ejemplo: ["mariadb"]]
DB_FILE=[Archivo con los datos de las compañías ["/data/companies.json"]]
API_VERSION=[Versión de la API ["v1.0"]]
```
### \# Importación esquema una vez creada la BBDD en MariaDB
La tabla se crea al ejecutarse la app si no existe previamente de forma automatica, el esquema se configura a partir del modelo **Companies** de Sequelize (**_/models/companies.js_**) estos son los campos de la tabla **_companies_**:
```JS
        counter: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        website: type.STRING,
        name: {
            type: type.STRING,
            unique: true
        },
        founded: type.INTEGER,
        size: type.STRING,
        locality: type.STRING,
        region: type.STRING,
        country: type.STRING,
        industry: type.STRING,
        linkedin_url: type.STRING
```
El modelo **Companies** no contiene los campos **_createdAt_** y **_updatedAt_**, estos los crea Sequelize por defecto si no se le indica lo contrario.
### \# Ejecución del servidor
```shell
Modo Desarrollo (con nodemon): npm run dev
Modo Producción: npm run start
```
### \# Carga de los datos en la tabla 'companies'. Endpoint con los datos por defecto:
[http://localhost:3000/api/companies/loadall](http://localhost:3000/api/companies/loadall)
Una vez seguidos estos pasos ya se puede hacer uso de toda la API!!
## Stack
Los enlaces a la documentación puede estar desfasada, revisar ultima versión o versión instalada.
1. NodeJS [DOCS](https://nodejs.org/es/docs/)
2. Express [DOCS](http://expressjs.com/en/4x/api.html)
3. Sequelize [DOCS](https://sequelize.org/api/v6/)
4. MariaDB [DOCS](https://mariadb.org/documentation/)
## Contact info
Contactame a mi email: raul.alhena@gmail.com
## License
GNU General Public License v3.0
[GNU](https://opensource.org/licenses/GPL-3.0)