import AOS from "aos";
import { useEffect } from "react";
import Tabs from "../../../components/Tabs";
import { StyledAboutSection } from "./style";
import shield from "../../../assets/image/Illustrations/altar-3.svg";

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <StyledAboutSection>
      <div className="container">
        <div className="container-left" data-aos="fade-right">
          <img src={shield} alt="shield" />
        </div>
        <div className="container-right" data-aos="fade-left">
          <p className="title">About</p>
          <h2>
            Exclusive Platform To <span> Practice And Train </span>Your
            Vulnerability Skills.
          </h2>
          <Tabs />
        </div>
      </div>
    </StyledAboutSection>
  );
}

export default AboutSection;
