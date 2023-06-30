import AOS from "aos";
import { useEffect } from "react";
import Tabs from "@/components/Tabs";
import { StyledAboutSection } from "./style";
import shield from "@/assets/image/Illustrations/altar-3.png";
import Image from "next/image";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <StyledAboutSection>
      <div className="container">
        <div className="container-left" data-aos="fade-right">
          <Image src={shield} width={10000} height={10000} alt="shield"></Image>
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
};

export default AboutSection;
