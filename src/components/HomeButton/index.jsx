import { HomeButtonContainer } from "./style";
import { RxCaretUp } from "react-icons/rx";
import React, { useEffect } from "react";
import AOS from "aos";

function HomeButton() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <a href="#" className="link">
      <HomeButtonContainer>
        <RxCaretUp />
      </HomeButtonContainer>
    </a>
  );
}

export default HomeButton;
