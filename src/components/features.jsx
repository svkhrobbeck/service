const Features = () => {
  const featureBeforeClasses =
    "before:inline-block before:bg-no-repeat before:bg-contain before:absolute before:bg-right-bottom before:bottom-0 before:right-0 before:transition-main before:-z-[1]";

  const featureCardClasses =
    "h-[269px] xs:h-[289px] min-[670px]:h-[300px] min-[840px]:h-[350px] lg:h-[310px] xl:h-[350px] 2xl:h-[400px] w-[269px] xs:w-full min-[670px]:w-[300px] min-[840px]:w-[350px] lg:w-[310px] xl:w-[350px] 2xl:w-[400px] pt-[30px] pb-[0] px-[22px] xs:px-[28px] lg:p-[30px] xl:p-[36px] 2xl:p-[42px] relative z-[1] rounded-[6px] overflow-hidden transition-main justify-self-center lg:justify-self-stretch";

  return (
    <section
      className="border-b-teal border-solid border-b bg-[url(./assets/images/features-bg-decor.svg)] bg-no-repeat bg-center bg-cover py-[20px] xs:py-[24px] sm:py-[36px] md:py-[52px] lg:py-[64px] xl:py-[84px] min-h-screen"
      id="features"
    >
      {/* features container */}
      <div className="container grid grid-cols-1 min-[670px]:grid-cols-2 lg:grid-cols-3 gap-y-[35px] lg:gap-[25px] xl:gap-[35px]">
        {/* features content */}
        <div className="max-w-none lg:max-w-[672px] w-full flex flex-col items-center lg:items-start text-center lg:text-left sml:col-span-2 col-span-1">
          {/* features badge tablet */}
          <span className="md:hidden text-center text-[11px] py-[11px] px-[19px] font-medium leading-normal rounded-[41px] border-[1.5px] border-solid border-teal bg-teal/[.4] shadow-button mb-[18px]">
            Жамоамиз энг энг яхши мутахассислардан иборат.
          </span>

          {/* features title */}
          <h2 className="font-55 text-gradient bg-teal-gradient drop-shadow-teal leading-[1.1] mb-[13px]">
            Биз билан ишлаш сабаблари
          </h2>

          {/* feature description */}
          <p className="font-17 mb-[13px] text-[#fff]/[.65] font-normal">
            Рақобатчилар ўзларини энг зўри эканликларини айтишсада, биз бунинг аксини амалда исботлаймиз.
          </p>

          {/* feature description last */}
          <p className="font-17 mb-[44px] text-[#fff]/[.65] font-normal">
            Бизнинг хизматларимиз билан қуйидаги ҳаволага босиш орқали танишишинг!
          </p>

          {/* features link (faq) */}
          <a
            className="w-full block xs:w-auto m-0 lg:mr-auto hover:opacity-100 hover:after:right-0 hover:after:top-0 min-w-[160px] text-center button--rect after:inline-block after:border after:border-solid after:border-teal/[.4] after:rounded-[4px] after:absolute after:top-[11px] after:-right-[9px] after:w-full after:h-full after:-z-[1] after:pointer-events-none after:transition-main"
            href="#faq"
          >
            FAQ
          </a>
        </div>

        {/* feature card */}
        <div
          className={`shadow-blue before:w-[158px] before:h-[158px] xs:before:w-[170px] xs:before:h-[170px] sm:before:w-[245px] sm:before:h-[245px] bg-blue-gradient sml:before:w-[145px] sml:before:h-[145px] xl:before:w-[160px] xl:before:h-[160px] 2xl:before:w-[221px] 2xl:before:h-[221px] before:bg-[url(./assets/images/money.svg)] ${featureCardClasses} ${featureBeforeClasses}`}
        >
          {/* feature-card title */}
          <h3 className="font-26 mb-[20px]">Ўртача нархлар</h3>

          {/* feature desc */}
          <p className="font-17 font-normal">
            Нархларни ҳамёнбоп қилиш учун иложи борича ўз хизматларимиз оптималлаштирамиз ва сизга маъқул келадиган
            нархларни айтамиз!
          </p>
        </div>

        {/* feature card */}
        <div
          className={`shadow-grey before:w-[113px] before:h-[137px] xs:before:w-[190px] xs:before:h-[180px] bg-grey-vertical-gradient sm:before:w-[259px] sm:before:h-[245px] sml:before:w-[145px] sml:before:h-[153px] xl:before:w-[145px] xl:before:h-[161px] 2xl:before:w-[200px] 2xl:before:h-[189px] before:bg-[url(./assets/images/deadline.svg)] ${featureCardClasses} ${featureBeforeClasses}`}
        >
          {/* feature-card title */}
          <h3 className="font-26 mb-[20px]">Ишни ўз вақтида етказиб берамиз!</h3>

          {/* feature desc */}
          <p className="font-17 font-normal">
            Ҳар бир босқични белгиланган муддатга мувофиқ режалаштирамиз ва деадлинега риоя қиламиз
          </p>
        </div>

        {/* feature card */}
        <div
          className={`shadow-grey before:w-[122px] before:h-[126px] xs:before:w-[156px] xs:before:h-[189px] bg-grey-vertical-gradient sm:before:w-[202px] sm:before:h-[245px]sml:before:w-[145px] sml:before:h-[176px] xl:before:w-[133px] xl:before:h-[161px] 2xl:before:w-[146px] 2xl:before:h-[186px] before:bg-[url(./assets/images/specialists.svg)] ${featureCardClasses} ${featureBeforeClasses}`}
        >
          {/* feature-card title */}
          <h3 className="font-26 mb-[20px]">Тажрибалили мутахассислар</h3>

          {/* feature desc */}
          <p className="font-17 font-normal">
            Жамоамизда кўплаб мутахассислар бор ва уларнинг ҳар бири ўз ишинг устаси
          </p>
        </div>

        {/* feature card */}
        <div
          className={`shadow-grey before:w-[121px] before:h-[125px] xs:before:w-[183px] xs:before:h-[189px] sm:before:w-[237px] sm:before:h-[245px] sml:before:w-[140px] sml:before:h-[145px] bg-grey-vertical-gradient xl:before:w-[156px] xl:before:h-[161px] 2xl:before:w-[183px] 2xl:before:h-[189px] before:bg-[url(./assets/images/support.svg)] ${featureCardClasses} ${featureBeforeClasses}`}
        >
          {/* feature-card title */}
          <h3 className="font-26 mb-[20px]">Консультация</h3>

          {/* feature desc */}
          <p className="font-17 font-normal">
            Бизнинг 24/7 онлайн ишлаймиз. Сизга ёрдам беришга ва саволларингизга жавоб олишингизга кўмаклашишга доим
            тайёрмиз.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
