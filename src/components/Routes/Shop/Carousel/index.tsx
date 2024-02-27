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

interface Slide {
  image: string;
  type: string;
  id: string;
}

const Carousel = () => {
  const [slides, setSlides] = useState<Slide[]>([] as Slide[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<{ results: Slide[] }>(
          "http://yrprey.com/resposta",
          {
            id: "2"
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        console.log(response)
        setSlides(response.data.results);
      } catch (error) {
        error
      }
    };

    fetchData();
  }, []);

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
            autoplay={{ delay: 6000 }}
            loop
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="container-carousel">
                  <Image
                    className="img-carousel"
                    src={slide.image}
                    width={1000}
                    height={1000}
                    alt="img-carousel"
                    unoptimized
                  />
                  <div className="content-carousel">
                    <button className="carousel-status" disabled>
                      <HiOutlineStatusOnline className="icon" />
                      Active now
                    </button>
                    <p className="carousel-date">{slide.type}</p>
                    <h2 className="carousel-title">
                      {slide.type}-{slide.id}
                    </h2>
                    <p className="carousel-details">{slide.id}</p>
                    <Link href={slide.image} className="carousel-button">
                      <button className="carousel-button">
                        See drop
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="container-carousel">
                  <Image
                    className="img-carousel"
                    src={slide.image}
                    width={1000}
                    height={1000}
                    alt="img-carousel"
                    unoptimized
                  />
                  <div className="content-carousel">
                    <button className="carousel-status" disabled>
                      <HiOutlineStatusOnline className="icon" />
                      Active now
                    </button>
                    <p className="carousel-date">{slide.type}</p>
                    <h2 className="carousel-title">
                      {slide.type}-{slide.id}
                    </h2>
                    <p className="carousel-details">{slide.id}</p>
                    <Link href={slide.image} className="carousel-button">
                      <button className="carousel-button">
                        See drop
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="container-carousel">
                  <Image
                    className="img-carousel"
                    src={slide.image}
                    width={1000}
                    height={1000}
                    alt="img-carousel"
                    unoptimized
                  />
                  <div className="content-carousel">
                    <button className="carousel-status" disabled>
                      <HiOutlineStatusOnline className="icon" />
                      Active now
                    </button>
                    <p className="carousel-date">{slide.type}</p>
                    <h2 className="carousel-title">
                      {slide.type}-{slide.id}
                    </h2>
                    <p className="carousel-details">{slide.id}</p>
                    <Link href={slide.image} className="carousel-button">
                      <button className="carousel-button">
                        See drop
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContainerCarousel>
    </motion.div>
  );
};

export default Carousel;
