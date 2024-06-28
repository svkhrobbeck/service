import { iconArrowRight } from "../assets";

const ServiceCard = props => {
  return (
    <div className="pt-[26px] md:pt-[33px] lg:pt-[30px] pb-[16px] sm:pb-[17px] lg:pb-[23px] 2xl:pb-[24px] px-[12px] sm:px-[15px] md:px-[20px] flex-grow-[1] bg-grey bg-grey-gradient border border-solid border-[#fff]/[.2] rounded-[36px] w-full max-w-full xs:max-w-[94%] sm:max-w-[450px] flex flex-col text-center">
      {/* service title */}
      <h3 className="font-26 mb-4 md:mb-6 leading-normal">{props.name}</h3>

      {/* service description */}
      <p className="font-17 font-normal leading-normal mb-4 md:mb-6">
        {props.desc}
      </p>

      {/* service price */}
      <p className="font-22 mt-auto mb-[14px] xs:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px]">
        {props.price}
      </p>

      {/* service time */}
      <p className="mb-[10px] xs:mb-[12px] md:mb-[14px] lg:mb-[16px] xl:mb-[18px] font-17">
        {props.time}
      </p>

      {/* service more link */}
      <a
        className={`icon--${props.iconName} before:flex-shrink-0 before:inline-block before:w-[24px] before:h-[24px] before:mr-[6px] before:bg-no-repeat before:bg-center beforea:bg-contain button--teal button--with-icon`}
        href="https://t.me/svkhrobbeck"
        target="_blank"
        rel="noreferrer"
      >
        {/* more link text */}
        <span className="font-17 button__text">Батафсил маълумот</span>

        {/* more link icon */}
        <img
          className="button__icon ml-auto"
          src={iconArrowRight}
          alt="arrow right icon"
          width={9}
          height={16}
        />
      </a>
    </div>
  );
};

export default ServiceCard;
