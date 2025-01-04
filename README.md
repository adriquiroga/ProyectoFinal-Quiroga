# Nature House - Documentation

## Proyecto

Nature House es una aplicación web diseñada para ofrecer una experiencia de compra intuitiva y agradable, especializada en productos de belleza y cuidado personal. El proyecto utiliza tecnologías modernas como React, React Router, y Bootstrap para proporcionar una interfaz dinámica y receptiva.

---

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos y componentes principales:

### 1. **index.html**
Archivo HTML principal que define la estructura básica del proyecto. Carga el script principal (`main.jsx`) para iniciar la aplicación React.

### 2. **main.jsx**
Punto de entrada de la aplicación React. Este archivo monta el componente principal (`App.jsx`) en el DOM dentro del contexto de un proveedor de carrito (`CartProvider`).

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
        <App />
    </CartProvider>   
  </StrictMode>,
);
```

### 3. **App.jsx**
El componente principal de la aplicación. Configura la navegación de la aplicación utilizando `BrowserRouter` y define las rutas principales:

- `/`: Lista de productos.
- `/category/:id`: Filtrar productos por categoría.
- `/item/:id`: Ver detalles de un producto.
- `/cart`: Visualizar el carrito de compras.

### 4. **Componentes**

#### a. **NavBar**
- Navegación principal de la aplicación.
- Incluye enlaces a las categorías y el componente `CartWidget` para mostrar el estado del carrito.

#### b. **ItemListContainer**
- Muestra una lista de productos, filtrada opcionalmente por categoría.
- Utiliza un loader (`PacmanLoader`) mientras se obtienen los datos.

#### c. **ItemDetailContainer**
- Muestra los detalles de un producto específico utilizando el componente `ItemDetail`.

#### d. **Cart**
- Visualiza los productos agregados al carrito y permite modificar cantidades, vaciar el carrito o proceder al checkout.

#### e. **Item**
- Representa un producto individual en la lista de productos. Incluye opciones para agregar y quitar unidades del carrito.

#### f. **ItemCount**
- Maneja el contador de cantidades para añadir productos al carrito.

#### g. **CartWidget**
- Muestra el ícono del carrito junto con la cantidad total de productos agregados.

### 5. **Contexto: `cartContext.js`**
Proporciona la lógica para gestionar el estado del carrito en toda la aplicación. Ofrece funcionalidades como:

- `addToCart`: Agregar productos al carrito.
- `removeItem`: Eliminar productos del carrito.
- `clearCart`: Vaciar el carrito.
- `getTotalPrice`: Calcular el precio total.
- `getQuantity`: Obtener la cantidad total de productos en el carrito.

---

## Tecnologías Utilizadas

- **React**: Para construir la interfaz de usuario.
- **React Router**: Para la navegación entre rutas.
- **Bootstrap**: Para el diseño y estilo responsivo.
- **Firebase**: Como backend para almacenar y recuperar datos de productos.

---

## Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone <url_del_repositorio>
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:3000`.

---

## Contribuciones

Si deseas contribuir al proyecto, por favor crea un `fork`, realiza tus cambios y envía un `pull request` explicando tus modificaciones.

---

## Licencia

Este proyecto está licenciado bajo los términos de [MIT License](LICENSE).
