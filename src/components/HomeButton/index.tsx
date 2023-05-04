import { HomeButtonContainer } from "./style";
import { RxCaretUp } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import AOS from "aos";

const HomeButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const handleButtonVisiblity = () => {
      window.pageYOffset > 150 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleButtonVisiblity);
    };
  }, []);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
      <div>
        {showButton && (
          <HomeButtonContainer onClick={handleScrollTop} data-aos="fade">
            <RxCaretUp />
          </HomeButtonContainer>
        )}
      </div>
  );
}

export default HomeButton;
