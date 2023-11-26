import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar(): ReactElement {
  return (
    <nav className={style.navigation}>
      <ul className={style.navigation__inner}>
        <li>
          <Link to={'/product/food'}> Food</Link>
        </li>
        <li>
          <Link to={'/product/clothing'}> Clothing</Link>
        </li>
        <li>
          <Link to={'/product/electronics'}> Electronics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
