import { logoImg } from "../assets";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="logo header__logo" href="/">
          <img className="logo__img" src={logoImg} alt="logo" width={97} height={49} />
        </a>

        <div className="header__actions">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Хизматлар
                </a>
              </li>
              
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Нима учун айнан биз?
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Контакт
                </a>
              </li>
            </ul>
          </nav>
          <a className="button--teal header__order-btn" href="#">
            Буюртма қилиш
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
