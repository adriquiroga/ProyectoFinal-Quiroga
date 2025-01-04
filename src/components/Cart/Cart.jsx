import React, { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import styles from "./Cart.module.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"; 

function Cart() {
  const { cart, clearCart, removeItem, addToCart, getTotalPrice } =
    useContext(cartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handlePurchaseCompletion = () => {
    setPurchaseCompleted(true);
    clearCart();
  };

  if (purchaseCompleted) {
    return (
      <div className={styles.cartEmpty}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu pedido ha sido confirmado. Te enviaremos más detalles por correo.</p>
        <Link to="/" className={styles.backToShop}>
          ← Volver a la tienda
        </Link>
      </div>
    );
  }

  if (cart.length === 0 && !isCheckout) {
    return (
      <div className={styles.cartEmpty}>
        <h2>El carrito está vacío</h2>
        <Link to="/" className={styles.backToShop}>
          ← Seguir Comprando
        </Link>
      </div>
    );
  }

  if (isCheckout) {
    return (
      <CheckoutForm
        cart={cart}
        totalPrice={getTotalPrice()}
        onBack={() => setIsCheckout(false)}
        clearCart={handlePurchaseCompletion} 
      />
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Mi Pedido</h2>
      <div className={styles.products}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className={styles.summary}>
        <h3>Total a pagar: ${getTotalPrice()}</h3>
        <div className={styles.summaryActions}>
          <Link to="/" className={styles.backToShop}>
            ← Seguir Comprando
          </Link>
          <button onClick={clearCart} className={styles.clearButton}>
            Vaciar Carrito
          </button>
          <button
            className={styles.checkoutButton}
            onClick={() => setIsCheckout(true)}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;


