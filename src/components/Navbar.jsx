
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
const Navbar = () =>{
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className='container'>
        
        <a className='navbar-brand' >Abbasali</a>

        <ul className="navbar-nav">

            <li className='nav-item'>
                <Link to="/" className='nav-link' >Shop</Link>
            </li>

            <li className='nav-item'>
            <Link to="/cart" className='nav-link' >
              {/* Cart */}
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </Link>
            </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;