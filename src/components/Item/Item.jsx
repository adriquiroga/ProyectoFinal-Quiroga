import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import styles from './Item.module.css';

function Item({ item }) {
  const { addToCart, removeItem } = useContext(cartContext);

  const handleAdd = () => {
    addToCart({ ...item, quantity: 1 }); 
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <Col key={item.id}>
      <Card className="h-100 text-center d-flex flex-column shadow-sm">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <Card.Img
            variant="top"
            src={item.image}
            className={styles.cardImage}
            alt={item.name}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className={`${styles.cardTitle} mb-2`}>{item.name}</Card.Title>
          <Card.Text className="mb-2">{item.category}</Card.Text>
          <Card.Text className="fw-bold mb-3">${item.price}</Card.Text>          

          <div className="d-flex justify-content-center align-items-center mb-2">
            <Button variant="danger" size="sm" onClick={handleRemove} className="mx-2">
              -
            </Button>
            <Button variant="success" size="sm" onClick={handleAdd} className="mx-2">
              +
            </Button>
          </div>

          <Button
            as={Link}
            to={`/item/${item.id}`}
            variant="primary"
            className="mt-auto align-self-center" >
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;

