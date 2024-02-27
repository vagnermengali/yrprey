import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { HiOutlineStatusOnline } from "react-icons/hi";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { ContainerCarousel } from "./style";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Carousel = () => {

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerCarousel>
        <div className="content">
          <Swiper
            spaceBetween={30}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>

            </SwiperSlide>
          </Swiper>
        </div>
      </ContainerCarousel>
    </motion.div>
  );
};

export default Carousel;
