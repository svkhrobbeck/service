import { Link, useLocation } from "react-router-dom";
import { iconClose, iconMenu, logoImg } from "../assets";
import { useState } from "react";
import { navLinks } from "../helpers/constants";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { hash } = useLocation();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) setIsSticky(true);
    else setIsSticky(false);
  });

  return (
    <header
      id="header"
      className={` transition-main fixed w-full top-0 z-[1000] ${
        isSticky
          ? "bg-[#1d1d1e]/[.97] py-[15px] shadow-header"
          : "py-[10px] xs:py-[18px] sm:py-[24px] md:py-[30px] lg:py-[40px] xl:py-[50px]"
      }`}
    >
      {/* header left */}
      <div className="relative md:static block md:flex items-center justify-between container">
        <div className="flex md:block items-center justify-between">
          {/* nav toggler */}
          <button
            className="button md:hidden outline-0"
            onClick={() => setIsNavOpen(true)}
          >
            <img
              className="max-w-[22px] xs:max-w-[32px] sm:max-w-[36px] w-full h-auto drop-shadow-teal"
              src={iconMenu}
              alt="icon menu"
              width={36}
              height={36}
            />
          </button>

          {/* logo */}
          <Link
            className="flex-shrink-0 outline-0 cursor-pointer flex mr-0 md:mr-[18px] xl:mr-[25px]"
            to="/"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              className="max-w-[67px] sm:max-w-[72px] md:max-w-[82px] lg:max-w-[92px] xl:max-w-[100px]"
              src={logoImg}
              alt="logo"
              width={100}
              height={55}
            />
          </Link>
        </div>

        {/* header actions */}
        <div className="flex items-center gap-[24px] lg:gap-[40px] xl:gap-[68px]">
          {/* nav */}
          <nav
            className={`pt-[36px] pb-[12px] md:py-0 rounded-bl-[20px] rounded-br-[20px] flex-col md:flex-row border-t-0 border transition-main border-[#fff]/[.2] md:border-none bg-nav-gradient md:bg-[url()] flex items-center fixed left-[12px] right-[12px] sm:left-[20px] sm:right-[20px] md:static gap-0 md:gap-[21px] lg:gap-[28px] xl:gap-[35px] ${
              isNavOpen ? "top-0" : "-top-[100%]"
            }`}
          >
            {/* nav toggler */}
            <button
              className="button outline-0 flex md:hidden px-[16px] mb-[20px] w-full justify-self-start"
              onClick={() => setIsNavOpen(false)}
            >
              <img
                className="max-w-[22px] xs:max-w-[32px] sm:max-w-[36px] w-full h-auto drop-shadow-teal"
                src={iconClose}
                alt="icon close"
                width={36}
                height={36}
              />
            </button>

            {/* nav links */}
            {navLinks.map(({ text, path, id }) => (
              <a
                key={id}
                className={` lg:active:opacity-60 lg:hover:text-teal/[.6] hover:opacity-80 font-bold md:font-normal text-teal md:text-[#fff] block w-full md:w-auto font-20 md:inline-block p-[4px] text-center md:text-left relative z-[4] transition-main cursor-pointer select-none [&:not(:last-child)]:mb-[11px] md:[&:not(:last-child)]:mb-0 ${
                  hash === path
                    ? "drop-shadow-teal bg-[#2f9782] md:bg-[transparent] text-teal"
                    : ""
                }`}
                href={path}
                onClick={() => setIsNavOpen(false)}
              >
                {text}
              </a>
            ))}
          </nav>
          <a
            className="button--teal-mini hidden lg:inline-block font-normal cursor-pointer select-none"
            href="https://t.me/svkhrobbeck"
            target="_blank"
          >
            Буюртма қилиш
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
