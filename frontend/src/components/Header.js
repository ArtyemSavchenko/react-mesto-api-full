import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header({ onSignOut, userEmail }) {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const location = useLocation();

  const handlerMenuBtnClick = () => {
    if (isOpenedMenu) {
      setIsOpenedMenu(false);
    } else {
      setIsOpenedMenu(true);
    }
  };

  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип Место Россия."
        className="logo header__logo"
      />
      {location.pathname === '/' && (
        <>
          <div
            className={`header__user-info-box ${
              isOpenedMenu ? 'header__user-info-box_opened' : ''
            }`}
          >
            <p className="header__text">{userEmail}</p>
            <button onClick={onSignOut} type="button" className="header__link">
              Выйти
            </button>
          </div>
          <button
            type="button"
            className={`burger-btn header__burger-btn ${
              isOpenedMenu ? 'burger-btn_opened-menu' : ''
            }`}
            aria-label="Кнопка меню."
            onClick={handlerMenuBtnClick}
          >
            <div className="burger-btn__cross"/>
          </button>
        </>
      )}
      {location.pathname === '/sign-in' && (
        <Link to="/sign-up" className="header__link header__link_right">
          Регистрация
        </Link>
      )}
      {location.pathname === '/sign-up' && (
        <Link to="/sign-in" className="header__link header__link_right">
          Войти
        </Link>
      )}
    </header>
  );
}
