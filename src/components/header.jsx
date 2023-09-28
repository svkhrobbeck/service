import { Link, useLocation } from "react-router-dom";
import { iconClose, iconMenu, logoImg } from "../assets";
import { useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { hash } = useLocation();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) setIsSticky(true);
    else setIsSticky(false);
  });

  const navLinks = [
    {
      text: "Нима учун айнан биз?",
      path: "#features",
      id: 1,
    },
    {
      text: "Хизматлар",
      path: "#services",
      id: 2,
    },
    {
      text: "FAQ",
      path: "#faq",
      id: 3,
    },
    {
      text: "Боғланиш",
      path: "#contact",
      id: 4,
    },
  ];

  return (
    <header id="header" className={`header ${isSticky ? "header--sticky" : ""}`}>
      <div className="header__container container">
        <div className="header__left">
          <button className="button header__nav-toggler" onClick={() => setIsNavOpen(true)}>
            <img className="header__nav-toggler-img" src={iconMenu} alt="icon menu" width={36} height={36} />
          </button>
          <Link className="logo header__logo" to="/" onClick={() => window.scrollTo(0, 0)}>
            <img className="logo__img" src={logoImg} alt="logo" width={100} height={55} />
          </Link>
        </div>

        <div className="header__actions">
          <nav className={`nav ${isNavOpen ? "nav--open" : ""}`}>
            <button className="button nav__close-btn" onClick={() => setIsNavOpen(false)}>
              <img className="nav__close-btn-img" src={iconClose} alt="icon close" width={36} height={36} />
            </button>

            {navLinks.map(({ text, path, id }) => (
              <a
                key={id}
                className={`nav__link ${hash === path ? "nav__link--active" : ""}`}
                href={path}
                onClick={() => setIsNavOpen(false)}
              >
                {text}
              </a>
            ))}
          </nav>
          <a className="button--teal-mini header__order-btn" href="https://t.me/svkhrobbeck" target="_blank">
            Буюртма қилиш
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
