import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <span className='header'>useContext Ecomm App</span>
        <ul className='nav'>
            <li className='products'>
            <Link to="/">Home Page</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;
