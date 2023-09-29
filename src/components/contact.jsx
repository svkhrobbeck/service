import { socials } from "../helpers/constants";

const Contact = () => {
  return (
    <section
      className="pt-[32px] xs:pt-46px sm:pt-[68px] md:pt-[72px] lg:pt-[84px] xl:pt-[102px] pb-[18px] xs:pb-[20px] sm:pb-[22px] md:pb-[24px] lg:pb-[30px] xl:pb-[40px]"
      id="contact"
    >
      {/* title */}
      <h2 className="font-55 text-center text-gradient bg-teal-gradient drop-shadow-teal uppercase mb-[22px] xs:mb-[30px] sm:mb-[38px] md:mb-[44px] lg:mb-[55px] xl:mb-[70px]">
        Боғланиш
      </h2>

      {/* contact container */}
      <div className="flex items-center justify-center gap-[10px] flex-col min-[650px]:flex-row min-[650px]:gap-[17px] md:gap-[20px] lg:gap-[24px] xl:gap-[35px] flex-wrap container">
        {/* socials / link */}
        {socials.map(({ link, icon, text, alt, id }) => (
          <a
            key={id}
            className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center text-center [&:last-child]:w-[100%] sm:[&:last-child]:w-auto md:[&:last-child]:w-[60%] xl:[&:last-child]:w-auto gap-[9px] xl:gap-[11px] button--rect"
            href={link}
            target="_blank"
          >
            {/* link icon */}
            <img className="w-[24px] h-[24px]" src={icon} alt={alt} width={24} height={24} />

            {/* link text */}
            <span>{text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
