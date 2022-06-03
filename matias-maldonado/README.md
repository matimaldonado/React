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

Este trabajo fue creado como parte del curso de React JS en Coderhouse para la entrega del proyecto final, en la continuación se detallan cada uno de los componentes dentro del mismo.

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


  ### CardList.js

  ### ItemComprar.js
Contiene el boton que se utilizara para la compra de los diversos productos. Dentro se encuentra la funcion ItemComprar, donde se crea el boton ya mencionado. Se ejecutan complementos integrados de MUI para darle estil al <Button/>. El boton contiene el atributo OnClick que lo vincula a la funcion Compra donde ejecuta por consola el total de articulos adquiridos.


  ### ItemCount.js

Contiene el componente Contador que incluye un estado donde se guarda la cantidad de elementos a adquirir. Contiene los botones de suma(+) y resta (-) para agregar o restar los elementos a adquirir. A su vez está asociado con el stock de los elementos para no superar la cantidad disponible a comprar. Tambien incluye un condicional que no permite el disminuir la cantidad de compra a un valor menor a 1.

  ### ItemListContainer.js

### Carpeta Detalle prod
  ### Detalleprod.js
  ### ItemDetailContainer.js
  ### ItemDetalle.css

### Carpeta Item
  ### Item.js
  ### ItemList.js

### Carpeta NavBar
  ### Cartwidget.js
  ### NavBar.js
  ### Nav Bar.css
  
### Carpeta Pages
  ### Contacto.js
  ### Detalleproducto.js
  ### Home.js
  ### Productos.js


