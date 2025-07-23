**Config** : Contiene la configuración de la aplicación, incluyendo las variables de entorno y los parámetros de conexión a la base de datos.


**controllers** : Contiene los controladores de las rutas de la aplicación, que manejan la lógica de negocio y las respuestas a las solicitudes.


**models** : Contiene los modelos de datos de la aplicación, que definen la estructura de los datos y las relaciones entre ellos.

**models index.js** : Archivo que exporta todos los modelos de la aplicación para facilitar su importación en otros archivos.

**node_modules** : Contiene las dependencias del proyecto instaladas a través de npm.

**routes** : Contiene las rutas de la aplicación, que definen los endpoints y las acciones asociadas a cada uno.

**server.js** : Es el punto de entrada de la aplicación, donde se configura el servidor y se inician las rutas.

**utils** : Contiene utilidades y funciones auxiliares que pueden ser utilizadas en diferentes partes de la aplicación, como validaciones, formateo de datos, etc. actualmente contiene el archivo insertarsinduplicados.js que se encarga de insertar datos en la base de datos sin duplicados.

**.env** : Archivo que contiene las variables de entorno necesarias para la configuración de la aplicación. cada vez que se clona el proyecto, es necesario crear este archivo con las variables adecuadas.

**app.js** : Archivo principal de la aplicación, donde se configuran las rutas y se inicia el servidor.

**server.js** : Archivo que contiene la configuración del servidor, incluyendo el puerto y la conexión a la base de datos.

**package.json** : Archivo que contiene la información del proyecto, incluyendo las dependencias y scripts necesarios para su funcionamiento.

**peliculas.controller.js** : Controlador que maneja las operaciones relacionadas con las películas, como la creación, actualización, eliminación y obtención de películas. este es el controlador principal de la aplicación.

**pelicula_actor.controller.js** : Controlador que maneja las operaciones relacionadas con la relación entre películas y actores, como la creación y eliminación de relaciones. dentro de estos tambien esta los controladores pelicula_director.controller.js , pelicula_idioma.controller.js y pelicula_genero.controller.js que manejan las relaciones entre películas y directores, idiomas y géneros respectivamente. ademas estos controles no permite actualizar las relaciones, ya que estas son creadas al momento de crear una película y no se pueden modificar posteriormente, porque son tablas de relación que representan una asociación entre dos entidades.
