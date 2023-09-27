import { TypeAnimation } from "react-type-animation";
import { heroImg, heroImg2x, iconArrowRight } from "../assets";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h2 className="hero__title">Бизнесингиз учун</h2>
          <TypeAnimation
            className="hero__subtitle"
            sequence={[
              "веб-сайт яратиш",
              1000,
              "Telegram рақам",
              1000,
              "Instagram обуначи",
              1000,
              "CHATGPT аккаунт",
              1000,
            ]}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
          />
          <h4 className="hero__heading">Хизматлари</h4>
          <p className="hero__desc">
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ведущими дал текстов!
          </p>
          <div className="hero__actions">
            <Link className="hero__btn button--teal button--with-icon" to="services" spy={true} smooth={tru e}>
              <span className="hero__btn-text button__text">Батафсил</span>
              <img className="button__icon" src={iconArrowRight} alt="arrow right icon" width={9} height={16} />
            </Link>
            <Link className="hero__link" to="contact" spy={true} smooth={true}>
              Саволларингиз борми?
            </Link>
          </div>
        </div>
        <div className="hero__image-wrapper">
          <img
            className="hero__image"
            src={heroImg}
            alt="businessman"
            width={663}
            height={844}
            srcSet={`${heroImg} 1x, ${heroImg2x} 2x`}
          />
        </div>
      </div>
      <div className="hero__divider" />
    </section>
  );
};

export default Hero;
