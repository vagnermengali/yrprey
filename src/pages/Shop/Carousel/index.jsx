import "swiper/css";
import React, { useEffect } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ContainerCarousel } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";
import { useState } from "react";

function Carousel() {
  const [img, setImg] = useState([]);

  function formatTodayDate() {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const todayDate = new Date().toLocaleString("en-US", options);
    return todayDate;
  }

  function formatText(text, capitalize = true) {
    const textPart = text.substring(text.indexOf("-") + 1, text.indexOf("."));
    const formattedText = capitalize
      ? textPart.charAt(0).toUpperCase() + textPart.slice(1)
      : textPart.charAt(0).toLowerCase() + textPart.slice(1);
    return formattedText;
  }

  const Api = axios.create({
    baseURL: "http://yrprey.com/index2.php",
    timeout: 5000,
  });

  useEffect(() => {
    Api.post("", {
      id: "1",
      qtde: "5",
    }).then((res) => {
      setImg(res.data);
    });
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
          <div className="content-text">
            <h1 className="content-title">Buy the collectibles</h1>
            <p className="content-details">from the best creators and brands</p>
          </div>
          <Swiper
            rewind={true}
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            className="mySwiper"
          >
            {img.map((imageName, index) => (
              <SwiperSlide>
                <div className="container-carousel" key={index}>
                  <img
                    className="img-carousel"
                    src={`/src/assets/image/slide/${imageName.nome}`}
                  />
                  <div className="content-carousel">
                    <button className="carousel-status" disabled>
                      <HiOutlineStatusOnline className="icon" />
                      ﾠActive now
                    </button>{" "}
                    <p className="carousel-date">{formatTodayDate()}</p>
                    <h2 className="carousel-title">
                      YRPrey Warrior Club {formatText(imageName.nome, true)}
                    </h2>
                    <p className="carousel-details">YRPrey</p>
                    <Link
                      to={`/shop/collection/${formatText(
                        imageName.nome,
                        false
                      )}`}
                      className="carousel-button"
                    >
                      See drop
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
}

export default Carousel;
