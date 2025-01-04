import React from "react";
import carrito from "../../assets/carrito.png";
import styles from "./CartWidget.module.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getQuantity } = useContext(cartContext);

  return (   
    <Link to="/cart" className={styles.miCarrito}>
    <img src={carrito} alt="Carrito" className={styles.cartIcon} />
    <span>{getQuantity() || 0}</span>
  </Link>
  
  );
}

export default CartWidget;
