import { TypeAnimation } from "react-type-animation";
import { heroImg, heroImg2x, iconArrowRight } from "../assets";

const Hero = () => {
  return (
    <section className="pt-[150px] xs:pt-[190px] sm:pt-[320px] md:pt-[340px] flex-grow-[0] sm:flex-grow-[1] flex flex-col w-full overflow-x-hidden">
      {/* hero container */}
      <div className="relative flex items-start flex-grow-[1] w-full container">
        {/* hero content */}
        <div className="relative z-[3] pb-[190px] sm:pb-[170px] md:pb-0">
          {/* title */}
          <h2 className="hidden xs:block mr-auto mb-0 font-65 uppercase bg-teal-gradient text-gradient drop-shadow-teal">
            Бизнесингиз учун
          </h2>

          {/* subtitle */}
          <h3 className="main-subtitle mb-[3px] xs:mb-[25px]">
            <TypeAnimation
              className="m-0"
              sequence={[
                "веб-сайт яратиш",
                1000,
                "Telegram аккаунт",
                1000,
                "Instagram обуначи",
                1000,
                "CHATGPT аккаунт",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>

          {/* heading */}
          <h4 className="font-32 drop-shadow-teal text-gradient bg-teal-gradient uppercase xs:hidden mb-[8px]">
            Хизматлари
          </h4>

          {/* description desktop */}
          <p className="mb-[17px] font-22 font-normal xs:font-medium xs:mb-[20px] md:mb-[25px] text-[#fff]/[.65] hidden xs:block xs:max-w-[320px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[590px] xl:max-w-[672px]">
            Бизнинг жамоамиз ўз соҳасининг мутахассисларидан иборат ва биз сизга
            энг қисқа вақт ичида веб-дастурларни ишлаб чиқишга тайёрмиз.
          </p>

          {/* description mobile */}
          <p className="mb-[17px] font-22 font-normal max-w-[190px] text-[#fff]/[.65] xs:hidden">
            Биз сизга энг қисқа вақт ичида веб-дастурларни ишлаб чиқишга
            тайёрмиз.
          </p>

          {/* links */}
          <div className="flex items-center gap-[24px]">
            {/* more link */}
            <a
              className="arrow-btn-hover button--teal button--with-icon"
              href="#services"
            >
              <span className="font-19 button__text">Батафсил</span>
              <img
                className="button__icon"
                src={iconArrowRight}
                alt="arrow right icon"
                width={9}
                height={16}
              />
            </a>

            {/* questions link */}
            <a
              className="cursor-pointer text-[#fff]/[.4] hidden md:block"
              href="#contact"
            >
              Саволларингиз борми?
            </a>
          </div>
        </div>

        {/* hero bg */}
        <div
          className="absolute bottom-0 w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] md:w-[430px] md:h-[430px] lg:w-[530px] lg:h-[530px] 2xl:w-[610px] 2xl:h-[610px]
          -right-[140px]
          xl:-right-[190px]
          bg-[url(./assets/images/hero-circular.svg)]
          bg-center
        bg-no-repeat
        bg-contain animation-scale
        "
        >
          {/* hero image */}
          <img
            className="w-full h-auto absolute bottom-0 -left-[60px] max-w-[283px] sm:max-w-[360px] md:max-w-[290px] lg:max-w-[450px] xl:max-w-[510px] 2xl:max-w-[563px]"
            src={heroImg}
            alt="businessman"
            width={663}
            height={844}
            srcSet={`${heroImg} 1x, ${heroImg2x} 2x`}
          />
        </div>
      </div>

      {/* hero divider */}
      <div className="w-full h-[5px] bg-divider-gradient" />
    </section>
  );
};

export default Hero;
