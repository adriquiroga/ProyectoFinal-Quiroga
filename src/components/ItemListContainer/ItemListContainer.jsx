import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../firebase/db';
import ItemList from '../ItemList';
import { PacmanLoader } from 'react-spinners'; 
import styles from './ItemListContainer.module.css'

function ItemListContainer({ text, mensaje }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id: categoryId } = useParams();

  useEffect(() => {
    setLoading(true); 
    getProducts()
      .then((products) => {
        if (categoryId) {
          setItems(products.filter((product) => product.category === categoryId));
        } else {
          setItems(products); 
        }
      })
      .finally(() => setLoading(false)); 
  }, [categoryId]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <PacmanLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.titulo1}>{text}</h1>
      <p className={styles.parrafo1}>{mensaje}</p>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;



