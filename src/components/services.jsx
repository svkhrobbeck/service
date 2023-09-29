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
  // swiper params
  const params = {
    modules: [Pagination, Autoplay, Navigation, Scrollbar, A11y],
    pagination: { clickable: true },
    autoplay: { delay: 2400, disableOnInteraction: false },
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
      {/* services title */}
      <h2 className="font-55 text-gradient drop-shadow-teal bg-teal-gradient text-center uppercase mb-[42px] md:mb-[52px] lg:mb-[70px] xl:mb-[90px]">
        Хизматлар
      </h2>

      {/* services slider / service cards */}
      <Swiper className="px-[20px]" {...params}>
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
