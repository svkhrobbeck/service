import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation, Autoplay } from "swiper/modules";

import services from "../data/services.json";

import { ServiceCard } from ".";

// styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Services = () => {
  // swiper params
  const params = {
    modules: [Pagination, Autoplay, Navigation, Scrollbar],
    pagination: { clickable: true },
    autoplay: { delay: 5500, disableOnInteraction: false },
    loop: true,
    slidesPerView: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      680: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="services" id="services">
      {/* services title */}
      <h2 className="font-55 text-gradient drop-shadow-teal bg-teal-gradient text-center uppercase mb-[42px] md:mb-[52px] lg:mb-[70px] xl:mb-[90px]">
        Хизматлар
      </h2>

      <div className="px-3 md:px-4 lg:px-5">
        {/* services slider / service cards */}
        <Swiper {...params}>
          {services.map(service => (
            <SwiperSlide
              className="!h-auto !flex !cursor-pointer md:!px-4"
              key={service.id}
            >
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
