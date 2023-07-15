import { Link } from 'react-router-dom';
import ERoutes from 'enums/routes';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to={`/${ERoutes.home}`}>Top Headlines</Link>
        </li>
        <li>
          <Link to={`/${ERoutes.everything}`}>Everything</Link>
        </li>
        <li>
          <Link to={`/${ERoutes.sources}`}>Sources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
