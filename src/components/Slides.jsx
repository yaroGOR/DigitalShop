import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "../styles/Slides.module.scss";

// import required modules
import { EffectCards , Autoplay} from "swiper";

export default function Slides() {
  return (
    <div className={styles.container}>
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      className={styles.swiper}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}    >
      <SwiperSlide className={styles.swiper_slide}>
        "Add color to your world with our digital art!"
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        "Transform your space with our stunning digital art collection!"
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        "Unleash your creativity with our digital art and design your dream
        space!"
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
