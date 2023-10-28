import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import ERoutes from 'enums/routes';
import { IMenu } from './types';

const Menu: FC<IMenu> = ({ isActive }) => {
  return (
    <nav className={`nav ${isActive ? 'nav__active' : ''}`}>
      <ul>
        <li>
          <NavLink to={`/${ERoutes.home}`}>Top Headlines</NavLink>
        </li>
        <li>
          <NavLink to={`/${ERoutes.everything}`}>Everything</NavLink>
        </li>
        <li>
          <NavLink to={`/${ERoutes.sources}`}>Sources</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
