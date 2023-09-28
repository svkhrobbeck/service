const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container features__container">
        <div className="features__content">
          <span className="features__badge">Жамоамиз энг энг яхши мутахассислари иборат.</span>
          <h2 className="features__title">Биз билан ишлаш сабаблари</h2>
          <p className="features__description">
            Рақобатчилар ўзларини энг зўри эканликларини айтишсада, биз бунинг аксини амалда исботлаймиз.
          </p>
          <p className="features__description features__description--last">
            Бизнинг хизматларимиз билан қуйидаги ҳаволага босиш орқали танишишинг!
          </p>
          <a className="features__btn button--rect" href="#faq">
            FAQ
          </a>
        </div>
        <div className="feature feature--blue feature--price">
          <h3 className="feature__title">Ўртача нархлар</h3>
          <p className="feature__desc">
            Нархларни ҳамёнбоп қилиш учун иложи борича ўз хизматларимиз оптималлаштирамиз ва сизга маъқул келадиган
            нархларни айтамиз!
          </p>
        </div>
        <div className="feature feature--deadline">
          <h3 className="feature__title">Ишни ўз вақтида етказиб берамиз!</h3>
          <p className="feature__desc">
            Ҳар бир босқични белгиланган муддатга мувофиқ режалаштирамиз ва деадлинега риоя қиламиз
          </p>
        </div>
        <div className="feature feature--specialists">
          <h3 className="feature__title">Тажрибалили мутахассислар</h3>
          <p className="feature__desc">Жамоамизда кўплаб мутахассислар бор ва уларнинг ҳар бири ўз ишинг устаси</p>
        </div>
        <div className="feature feature--support">
          <h3 className="feature__title">Консультация</h3>
          <p className="feature__desc">
            Бизнинг 24/7 онлайн ишлаймиз. Сизга ёрдам беришга ва саволларингизга жавоб олишингизга кўмаклашишга доим
            тайёрмиз.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
