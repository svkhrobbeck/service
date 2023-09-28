import { services } from "../helpers/constants";
import { ServiceCard } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Navigation, Autoplay } from "swiper/modules";

// styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Services = () => {
  const params = {
    modules: [Pagination, Autoplay, Navigation, Scrollbar, A11y],
    pagination: { clickable: true },
    autoplay: { delay: 1200, disableOnInteraction: false },
    navigation: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  return (
    <section className="services" id="services">
      <h2 className="services__title">Хизматлар</h2>
      <Swiper className="services__container" {...params}>
        {services.map(service => (
          <SwiperSlide key={service.id}>
            <ServiceCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
