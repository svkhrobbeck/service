import { heroImg, heroImg2x, iconArrowRight } from "../assets";

const hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h2 className="hero__title">
            ChatGPT <span className="hero__title-inner">Аккаунтлар</span>
          </h2>
          <h3 className="hero__subtitle">Телеграм рақамлар</h3>
          <p className="hero__desc">
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ведущими дал текстов!
          </p>
          <div className="hero__actions">
            <a className="button--teal hero__btn" href="#">
              <span className="hero__btn-text">Батафсил маълумот</span>
              <img className="hero__btn-icon" src={iconArrowRight} alt="arrow right icon" width={9} height={16} />
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
    </section>
  );
};

export default hero;
