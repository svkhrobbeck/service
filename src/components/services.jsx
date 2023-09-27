import { services } from "../helpers/constants";
import { ServiceCard } from ".";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services__title">Хизматлар</h2>
      <div className="container services__container">
        {services.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
