import { iconArrowRight } from "../assets";

const ServiceCard = ({ name, desc, price, time }) => {
  return (
    <div className="service">
      <h3 className="service__title">{name}</h3>
      <p className="service__description">{desc}</p>
      <div className="service__price-time-wrapper">
        <p className="service__price">{price}</p>
        <p className="service__time">{time}</p>
      </div>
      <a className="service__link button--teal button--with-icon" href="#">
        <span className="service__link-text button__text">Батафсил маълумот</span>
        <img className="button__icon" src={iconArrowRight} alt="arrow right icon" width={9} height={16} />
      </a>
    </div>
  );
};

export default ServiceCard;
