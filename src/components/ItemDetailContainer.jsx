import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {app} from "../firebase/config"; 
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore(app);
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, "items", id));
        if (productDoc.exists()) {
          setDetail({ id: productDoc.id, ...productDoc.data() });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error obteniendo producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!detail) {
    return <p>Producto no encontrado</p>;
  }

  return <ItemDetail detail={detail} />;
}

export default ItemDetailContainer;
