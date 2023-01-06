import styled from "styled-components";
import background from "../../../assets/image/backgrounds/background-about.svg";

export const ContainerCarousel = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content:center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    gap: 30px;
    padding-top:40px;
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
    border: none;
    outline: none;
    color: var(--white);
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    padding: 12px;
    background: var(--gradient-color);
    border-radius: 30px;
    text-transform: uppercase;
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
  .carousel-button {
    padding: 20px 24px;
    border: none;
    outline: none;
    color: var(--white);
    font-family: inherit;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    width: 140px;
    height: 56px;
  }
  .carousel-button:after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--gradient-color);
    left: 0;
    top: 0;
    border-radius: 6px;
  }
  .carousel-button:before {
    content: "";
    background: var(--gradient-color-animation);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  .carousel-button:hover::before {
    opacity: 1;
  }
  .carousel-button:active {
    font-weight: bold;
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
  }
  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
