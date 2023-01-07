import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ContainerCarousel } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineStatusOnline } from "react-icons/hi";
import slide1 from "../../../assets/image/slide/slide-red.png";
import slide4 from "../../../assets/image/slide/slide-cian.png";
import slide2 from "../../../assets/image/slide/slide-blue.png";
import slide3 from "../../../assets/image/slide/slide-white.png";
import slide5 from "../../../assets/image/slide/slide-beige.png";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

function Carousel() {
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
            <SwiperSlide>
              <div className="container-carousel">
                <img className="img-carousel" src={slide1} />
                <div className="content-carousel">
                  <button className="carousel-status" disabled>
                    <HiOutlineStatusOnline className="icon" />
                    ﾠActive now
                  </button>{" "}
                  <p className="carousel-date">Qui, 12 Jan</p>
                  <h2 className="carousel-title">YRPrey Warrior Club Red</h2>
                  <p className="carousel-details">YRPrey</p>
                  <Link to="/shop/collection/red" className="carousel-button">
                    See drop
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-carousel">
                <img className="img-carousel" src={slide2} />
                <div className="content-carousel">
                  <button className="carousel-status" disabled>
                    <HiOutlineStatusOnline className="icon" />
                    ﾠActive now
                  </button>{" "}
                  <p className="carousel-date">Qui, 5 Jan</p>
                  <h2 className="carousel-title">YRPrey Warrior Club Blue</h2>
                  <p className="carousel-details">YRPrey</p>
                  <Link to="/shop/collection/blue" className="carousel-button">
                    See drop
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-carousel">
                <img className="img-carousel" src={slide3} />
                <div className="content-carousel">
                  <button className="carousel-status" disabled>
                    <HiOutlineStatusOnline className="icon" />
                    ﾠActive now
                  </button>{" "}
                  <p className="carousel-date">Seg, 9 Jan</p>
                  <h2 className="carousel-title">YRPrey Warrior Club White</h2>
                  <p className="carousel-details">YRPrey</p>
                  <Link to="/shop/collection/white" className="carousel-button">
                    See drop
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-carousel">
                <img className="img-carousel" src={slide4} />
                <div className="content-carousel">
                  <button className="carousel-status" disabled>
                    <HiOutlineStatusOnline className="icon" />
                    ﾠActive now
                  </button>{" "}
                  <p className="carousel-date">Quin, 19 Jan</p>
                  <h2 className="carousel-title">YRPrey Warrior Club Cian</h2>
                  <p className="carousel-details">YRPrey</p>
                  <Link to="/shop/collection/cian" className="carousel-button">
                    See drop
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-carousel">
                <img className="img-carousel" src={slide5} />
                <div className="content-carousel">
                  <button className="carousel-status" disabled>
                    <HiOutlineStatusOnline className="icon" />
                    ﾠActive now
                  </button>{" "}
                  <p className="carousel-date">Ter, 15 Jan</p>
                  <h2 className="carousel-title">YRPrey Warrior Club Beige</h2>
                  <p className="carousel-details">YRPrey</p>
                  <Link to="/shop/collection/beige" className="carousel-button">
                    See drop
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </ContainerCarousel>
    </motion.div>
  );
}

export default Carousel;
