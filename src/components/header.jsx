import { Link } from "react-scroll";
import { iconClose, iconMenu, logoImg } from "../assets";
import { useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) setIsSticky(true);
    else setIsSticky(false);
  });

  return (
    <header className={`header ${isSticky ? "header--sticky" : ""}`}>
      <div className="header__container container">
        <div className="header__left">
          <button className="button header__nav-toggler" onClick={() => setIsNavOpen(true)}>
            <img className="header__nav-toggler-img" src={iconMenu} alt="icon menu" width={36} height={36} />
          </button>
          <a className="logo header__logo" href="/">
            <img className="logo__img" src={logoImg} alt="logo" width={100} height={55} />
          </a>
        </div>

        <div className="header__actions">
          <nav className={`nav ${isNavOpen ? "nav--open" : ""}`}>
            <button className="button nav__close-btn" onClick={() => setIsNavOpen(false)}>
              <img className="nav__close-btn-img" src={iconClose} alt="icon close" width={36} height={36} />
            </button>
            <Link className="nav__link" activeClass="nav__link--active" to="features" spy={true} smooth={true}>
              Нима учун айнан биз?
            </Link>

            <Link className="nav__link" activeClass="nav__link--active" to="services" spy={true} smooth={true}>
              Хизматлар
            </Link>

            <Link className="nav__link" activeClass="nav__link--active" to="faq" spy={true} smooth={true}>
              FAQ
            </Link>

            <Link className="nav__link" activeClass="nav__link--active" to="contact" spy={true} smooth={true}>
              Боғланиш
            </Link>
          </nav>
          <a className="button--teal-mini header__order-btn">Буюртма қилиш</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
