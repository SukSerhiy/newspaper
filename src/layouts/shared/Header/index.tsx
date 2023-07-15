import Menu from '../Menu';
import Categories from '../Categories';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h3>Newspaper</h3>
        <button type="button" className="search-btn">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <button type="button" className="menu-btn">
          <i className="fa-solid fa-bars" />
        </button>
      </div>
      <div className="search-input">
        <input type="text" className="search-input__input" />
      </div>
      <Menu />
      <Categories />
    </header>
  );
};

export default Header;
