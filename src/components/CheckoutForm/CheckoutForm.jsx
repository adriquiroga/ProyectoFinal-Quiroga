import React, { useState } from "react";
import styles from "./CheckoutForm.module.css";

function CheckoutForm({ cart, totalPrice, onBack, clearCart }) {
  const [formData, setFormData] = useState({
    name: "Gabriela Pasos",
    email: "gabipasos@gmail.com",
    address: "Av. Colón 150",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);

    setTimeout(() => {
      clearCart(); 
    }, 0);
  };

  if (showThankYou) {
    return (
      <div className={styles.checkoutContainer} >
        <h2 >¡Gracias por tu compra!</h2>
        <p >
          Tu pedido ha sido confirmado. Nos pondremos en contacto contigo en el correo{" "}
          <strong>{formData.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <h2>Detalles de la Compra</h2>
      <ul className={styles.productList}>
        {cart.map((item) => (
          <li key={item.id} className={styles.productItem}>
            <div>
              <strong>{item.name}</strong> - {item.quantity} unidad(es)
            </div>
            <div>${item.price * item.quantity}</div>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Nombre Completo:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Confirmar Compra
        </button>
        <button type="button" className={styles.backButton} onClick={onBack}>
          Volver al Carrito
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;

