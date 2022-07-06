# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Trabajo "MATIAS MALDONADO"

Este trabajo fue creado como parte del curso de React JS en Coderhouse para la entrega del proyecto final.

El objetivo del proyecto es la creación de un sitio web de e-commerce, en donde se pueda llevar a cabo todo el proceso de compra de un elemento, utilizando las diferentes funcionalidades aprendidas durante el cursado.

Además de los componentes propios de la creación del sitio, se agregan el uso de Firebase como base de dato para los productos a presentar, para la creación de ordenes de compra y para la recepción de consultas.

En la continuación se detallan cada uno de los componentes dentro del mismo.

### Carpeta public
Contiene las imagenes que se colocaran en el posterior sitio web.

### Carpeta SRC
Contiene todos los componentes propios al proyecto,incluye la carpeta "componentes" y los archivos app.js e Index.js y .css

  ### Index.js
Página principal del proyecto donde se ejecuta el componente app.js


  ### Index.css
Pagína correspondiente al diseño del index.js y al contenido general del proyecto con fuentes de letras

  ### App.js
Se incluye la funcion App que contiene el encabezado del sitio y contendrá los componentes principales a mostrar en el proyecto.


### Carpeta Componentes
Carpeta contenedora general de todos los componentes creados y empleados en el proyecto. En el mismo se encuentran las carpetas Card, Detalle prod, Item, NavBar, Pages.

### Carpeta Card
Contiene los elementos correspondientes al diseño y componentes creados para la muestra de las tarjeta de los productos.


  ### ItemComprar.js
Contiene el boton que se utilizara para la compra de los diversos productos. Dentro se encuentra la funcion ItemComprar, donde se crea el boton ya mencionado. Se ejecutan complementos integrados de MUI para darle estil al <Button/>. El boton contiene el atributo OnClick que lo vincula a la funcion Compra donde ejecuta por consola el total de articulos adquiridos.


  ### ItemCount.js

Contiene el componente Contador que incluye un estado donde se guarda la cantidad de elementos a adquirir. Contiene los botones de suma(+) y resta (-) para agregar o restar los elementos a adquirir. A su vez está asociado con el stock de los elementos para no superar la cantidad disponible a comprar. Tambien incluye un condicional que no permite el disminuir la cantidad de compra a un valor menor a 1.

  ### ItemListContainer.js
Contiene el funcion CardItem que luego se ocupara de realizar los filtros para las categorias de los productos y de tomar las promesas del array Producto. A traves de aqui se pasaran las propiedades a Item List.

### Carpeta Detalle prod
Contiene los componentes que crean las tarjetas individuales con cada uno de los respectivos productos
  ### Detalleprod.js
Contiene el array que lleva la informacion necesaria de cada uno de los productos a mostrar.
  ### ItemDetailContainer.js
Contiene la funcion ItemDetailContainer que ejecutara el detalle de cada uno de los elementos a vender. Lo realiza a traves de una promesa en donde recibe el array producto y lo filtra según el id de cada uno de ellos, pasando las propiedades a través de un estado al ItemDetail
  ### ItemDetalle.css
Contiene los estilos a aplicar en los componentes ItemDetailContainer y en ItemDetail

  ### ItemDetail.js
  Contiene la funcion ItemDetail que recibe las propiedades y los elementos de ItemDetailConteiner y los pasa a través de las card que se mostraran finalmente.

### Carpeta Item
Contiene los elementos que se veran en la pantalla principal como tarjetas para los productos

  ### Item.js
Contiene la funcion Item, que recibe propiedades de ItemList y las lleva a una Card donde se incluyen las imagenes, titulo y precio del producto, junto con los botones de cuenta, de compra y detalle.  
  ### ItemList.js
Contiene ItemList que recibe las propiedades de ItemListContainer, realiza un map de las mismas y las divides para pasarselas a Item.

### Carpeta NavBar
Contiene los elementos cargados en el NavBar de nuestro proyecto.

  ### Cartwidget.js
Contiene el elemento MarketBtn que tiene el carrito de compras. Es un componente que se crea a través de la descarga de MUI.

  ### NavBar.js
Contiene la funcion NavBar que ejecuta la barra de navegación superior del sitio. En el se encuentran linkeados el Home, contacto, productos y Quienes somos junto con el carrito de compras. A su vez en productos tenemos un desplegable que tiene la categoria de los productos ofrecidos. Los elementos para el desplegable y para los botones son obtenidos de MUI.

  ### Nav Bar.css
Contiene los elementos de diseño de la barra de navegacion.

### Carpeta Pages
Contiene los componentes que conllevan la informacion de cada página del sitio.
  ### Cart.js
Contiene el componente  Cart, por el cual se recibiran los productos que el cliente seleccionó y se mostraran en la pantalla final dando paso al cierre de la compra. En el caso de que el cliente no tenga productos ingresado, mostrará un texto haciendo referencia a esto y lo invitará al cliente al Inicio del sitio.

Dentro de este componente se ejecutará el CartFinally que introducirá el detalle del producto junto con el precio y las cantidades de los mismos. A su vez se observaran las cantidades y valor total a través de "cantidadTotal" y "totalPrice"

Al finalizar la compra, se desplegará un Modal que permitirá al usuario cargar sus datos a través de los TextField. Una vez completados los campos obligatorios, al enviar la información, se recepcionará en la base de datos de Firebase (coleccion:ordenes), y se ejecutará el elemento Success que dispondrá de un mensaje de recepción de orden y el n° de la misma.


  ### Contacto.js
Contiene el componente Contacto, donde se encuentra un formulario para el envío de consultas y datos personales de los clientes. El envío del mismo es recepcionado en una base de datos creada en Firebase. Una vez realizada la consulta, la pantalla informará que se realizó la misma e introducirá un botón para regresar al inicio.

  ### Detalleproducto.js
Contiene el componete DetalleProducto que recibe a ItemDetailContainer y luego es enviado a App.js para ser linkeado y mostrado en el sitio pero solo mostrando el detalle de cada uno de los productos.  

  ### Home.js
  Contiene el componete Home que recibe a CardList y luego es enviado a App.js para ser linkeado y mostrado en el sitio como página principal del mismo.

  ### Productos.js
Contiene el componete ProductoList que recibe a CardItem y luego es enviado a App.js para ser linkeado y mostrado en el sitio pero solo mostrando las categorias de los mismos.  

  ### QuienesSomos.js
Contiene el componente QuienesSomos que introduce una pequeña introducción e información resumida de la empresa del sitio web.