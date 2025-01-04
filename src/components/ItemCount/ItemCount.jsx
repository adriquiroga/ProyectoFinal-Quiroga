import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import styles from './ItemCount.module.css';
import { cartContext } from '../../context/cartContext';

function ItemCount({ detail }) {

  const [counter, setCounter] = useState(0);
  const { addToCart } = useContext(cartContext);

  const handleAdd = () => {
    if (counter < detail.stock) {
      setCounter(counter + 1);
    }
  };

  const handleSub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    if (counter > 0) {
      addToCart(detail,  counter );
    }
  };
  

  return (
    <div className={`d-flex flex-column align-items-center ${styles['estilo-boton']}`}>
      <div className="d-flex align-items-center justify-content-center">
        <Button
          size="sm"
          variant="danger"
          onClick={handleSub}
          disabled={counter === 0}
        >
          -
        </Button>

        <p className={`mx-3 ${styles['counter-number']}`}>{counter}</p>

        <Button variant="success" size="sm" onClick={handleAdd} className="mx-2">
              +
        </Button>
        
      </div>

      <Button
        onClick={handleAddToCart}
        size="sm"
        variant="primary"
        className="mt-2 w-100"
        disabled={counter === 0}
      >
        Add to cart
      </Button>

      <p className="text-muted mt-1" style={{ fontSize: "0.9rem" }}>
        Stock disponible: {detail.stock}
      </p>
    </div>
  );
}

export default ItemCount;

