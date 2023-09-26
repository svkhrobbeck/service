import { Link } from "react-scroll";
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
                <Link className="nav__link" to="services" spy={true} smooth={true}>
                  Хизматлар
                </Link>
              </li>

              <li className="nav__item">
                <Link className="nav__link" to="features" spy={true} smooth={true}>
                  Нима учун айнан биз?
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="features" spy={true} smooth={true}>
                  Контакт
                </Link>
              </li>
            </ul>
          </nav>
          <a className="button--teal header__order-btn">Буюртма қилиш</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
