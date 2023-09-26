import ServiceCard from "./service-card";
import { services } from "../helpers/constants";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services__title">Хизматлар</h2>
      <div className="services__container">
        {services.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
