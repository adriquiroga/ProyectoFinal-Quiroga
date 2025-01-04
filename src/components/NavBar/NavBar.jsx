import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
 
function NavBar() {
      return (
        <nav className={styles.barraNavegacion}>
            <img src={logo} className = {styles.logo} />
            <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/Perfumes">Perfumes</Link></li>
                <li><Link to="/category/Rostro">Rostro</Link></li>
                <li><Link to="/category/Cuerpo">Cuerpo</Link></li>
                <li><Link to="/category/Cabello">Cabello</Link></li>   
                <CartWidget/>   
            </ul>                                        
        </nav>
    );
}
  
export default NavBar