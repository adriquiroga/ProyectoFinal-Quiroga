import React from "react";
import styles from "./CartItem.module.css";

function CartItem({ item, removeItem, addToCart }) {
  return (
    <div key={item.id} className={styles.product}>
      <img src={item.image} alt={item.name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{item.name}</h3>
        <p className={styles.productPrice}>Precio unitario: ${item.price}</p>
        <div className={styles.quantityContainer}>
          <p>Cantidad:</p>
          <button
            onClick={() => removeItem(item.id)}
            className={styles.quantityButton}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => addToCart(item)}
            className={styles.quantityButton}
          >
            +
          </button>
        </div>
        <p className={styles.productTotal}>
          Total por producto: ${item.price * item.quantity}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
