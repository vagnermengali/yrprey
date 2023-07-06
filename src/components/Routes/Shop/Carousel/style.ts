import styled from "styled-components";

export const ContainerCarousel = styled.div`
  width: 100vw;
  height: auto;

  .content {
    width: 100%;
  }

  .content-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .content-title {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    color: var(--white);
  }

  .content-details {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: var(--white);
  }

  .container-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px);
  }

  .content-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 20px;
  }

  .carousel-status {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    color: var(--white);
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    padding: 12px;
    border-radius: 30px;
    text-transform: uppercase;
    background: var(--gradient-color-3);
    border: outset var(--tertiary-color) 3px;
  }

  .icon {
    font-size: 24px;
  }

  .carousel-date {
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    color: var(--white);
  }

  .carousel-title {
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: var(--white);
  }

  .carousel-details {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: var(--primary-color);
  }

  .carousel-button,
  .carousel-button:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 60px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    transition: all ease 0.3s;
    text-decoration: none;
    text-transform: none;
  }

  .carousel-button-inside,
  .carousel-button-inside:not(:hover) {
    border: outset var(--septenary-color) 6px;
    background: var(--gradient-color-2);
    width: calc(165px - 6px);
    height: calc(60px - 6px);
    outline: none;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Norse', sans-serif;
  }

  .carousel-button-inside:active {
    transform: scale(0.985);
  }

  .carousel-button:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .carousel-button:hover .carousel-button-inside {
    background: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }

  .container-right {
    width: 65%;
    height: 100%;
  }

  .container-right .image {
    width: 100%;
    height: max-content;
    animation: shakeY 20s ease-in-out infinite alternate-reverse both;
  }

  .img-carousel {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-button-prev:not(:hover),
  .swiper-button-next:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: outset var(--tertiary-color) 3px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all ease 0.3s;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    border: outset var(--quartenary-color) 3px;
    background: var(--gradient-color-2);
  }

  .swiper-button-prev:hover::after,
  .swiper-button-next:hover:after {
    background-color: var(--gradient-color-4);
    color: var(--white);
    border: outset var(--primary-color) 6px;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    position: absolute;
    content: "";
    border: outset var(--septenary-color) 6px;
    background-color: var(--gradient-color-2);
    background-image: url("/icons/arrow-slide.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: calc(39px - 6px);
    height: calc(39px - 6px);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    cursor: pointer;
    z-index: 0;
    font-size: 29px;
    transition: all ease 0.3s;
  }

  .swiper-button-prev::after {
    transform: rotate(-90deg)
  }

  .swiper-button-next::after {
    transform: rotate(90deg)
  }

  .swiper-button-prev::after:active,
  .swiper-button-next::after:active {
    transform: scale(0.95);
  }

  .swiper-pagination-bullet {
    border-radius: 0;
    opacity: 1;
    transform: rotate(90deg);
    margin: 0 10px 0 10px !important;
    padding: 0;
    width: 15px;
    height: 15px;
    border: outset var(--primary-color) 3px;
    background: var(--nonary-color);
    transition: all ease 0.3s;
    rotate: 45deg;
  }

  .swiper-pagination-bullet-active {
    border: outset var(--tertiary-color) 3px;
    background: var(--quartenary-color);
  }
`;