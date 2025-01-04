
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Item from './Item/Item';


function ItemList({ items }) {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {items.map(item => (
          <Item item={item} key={item.id} /> 
        ))}
      </Row>
    </Container>
  );
}


export default ItemList