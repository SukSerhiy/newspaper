import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header">
      <div className="header__title-block">
        <h3 className="header__title">Newspaper</h3>
        <button
          type="button"
          className="header__btn-menu"
          onClick={() => setIsActive((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <Menu isActive={isActive} />
      {/* <Categories /> */}
      {/* <div className="header__space"></div> */}
    </header>
  );
};

export default Header;
