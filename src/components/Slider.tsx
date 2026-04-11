import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function Slider({ items }: { items: [] }) {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {items.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <Image
            width={540}
            height={800}
            src={`/images/slide/${item.img}.png`}
            alt={item.img}
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
