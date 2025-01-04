import ItemCount from "../ItemCount/ItemCount";
import styles from './ItemDetail.module.css';


function ItemDetail({detail}){

  return(
    <div className={styles.container}>
      <h3 className={styles.name}>{detail?.name}  </h3>
      
      <img 
        src={Array.isArray(detail?.image) ? detail?.image[0] : detail?.image} 
        className={styles.image} 
        alt={detail?.name}
      />
      <p className={styles.price}>${detail?.price}  </p>
      <ItemCount detail = {detail}/>
    </div>
  )
}

export default ItemDetail;