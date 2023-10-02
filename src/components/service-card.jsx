import { iconArrowRight } from "../assets";

const ServiceCard = ({ name, desc, price, time, iconName }) => {
  return (
    <div className="pt-[26px] sm:pt-[28px] md:pt-[33px] lg:pt-[38px] 2xl:pt-[44px] pb-[16px] sm:pb-[17px] lg:pb-[23px] 2xl:pb-[24px] px-[12px] sm:px-[15px] md:px[21px] lg:px-[26px] 2xl:px-[30px] flex-grow-[1] bg-grey bg-grey-gradient border border-solid border-[#fff]/[.2] rounded-[36px] w-full max-w-full xs:max-w-[94%] sm:max-w-[84%] min-[68px]:max-w-full 2xl:max-w-[420px] flex flex-col text-center">
      {/* service title */}
      <h3 className="font-32 mb-[24px] xs:mb-[28px] md:mb-[32px] lg:mb-[38px] xl:mb-[46px] leading-normal">{name}</h3>

      {/* service description */}
      <p className="font-17 font-normal leading-normal mb-[18px] xs:mb-[20px] md:mb-[24px] lg:mb-[28px] xl:mb-[36px">
        {desc}
      </p>

      {/* service price */}
      <p className="font-22 mt-auto mb-[14px] xs:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px]">{price}</p>

      {/* service time */}
      <p className="mb-[10px] xs:mb-[12px] md:mb-[14px] lg:mb-[16px] xl:mb-[18px] font-17">{time}</p>

      {/* service more link */}
      <a
        className={`icon--${iconName} before:flex-shrink-0 before:inline-block before:w-[24px] before:h-[24px] before:mr-[6px] before:bg-no-repeat before:bg-center beforea:bg-contain button--teal button--with-icon`}
        href="https://t.me/svkhrobbeck"
        target="_blank"
      >
        {/* more link text */}
        <span className="font-17 button__text">Батафсил маълумот</span>

        {/* more link icon */}
        <img className="button__icon ml-auto" src={iconArrowRight} alt="arrow right icon" width={9} height={16} />
      </a>
    </div>
  );
};

export default ServiceCard;
