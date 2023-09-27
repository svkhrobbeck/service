import { TypeAnimation } from "react-type-animation";
import { heroImg, heroImg2x, iconArrowRight } from "../assets";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h2 className="hero__title">Бизнесингиз учун</h2>
          <h3 className="hero__subtitle">
            <TypeAnimation
              className="hero__subtitle-inner"
              sequence={[
                "веб-сайт хизматлари",
                1000,
                "Телеграм Рақамлар",
                1000,
                "Инстаграм Обуначи",
                1000,
                "ЧатГПТ аккаунтлар",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className="hero__desc">
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ведущими дал текстов!
          </p>
          <div className="hero__actions">
            <a className="hero__btn button--teal button--with-icon" href="#">
              <span className="hero__btn-text button__text">Батафсил маълумот</span>
              <img className="button__icon" src={iconArrowRight} alt="arrow right icon" width={9} height={16} />
            </a>
            <a className="hero__link" href="#">
              Саволларингиз борми?
            </a>
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
