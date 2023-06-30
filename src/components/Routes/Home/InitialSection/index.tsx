import { useContext } from "react";
import { StyledInitialSection } from "./style";
import { Context } from "@/context/context";
import padclock from "@/assets/image/Illustrations/altar-1.png";
import Image from "next/image";

const InitialSection = () => {
  const { router } = useContext(Context);

  return (
    <StyledInitialSection>
      <div className="container">
        <div className="container-left">
          <h1>
            Your Complete <span>Vulnerability</span> Site.
          </h1>
          <p>Find the most beautiful collectibles in one place!</p>
          <button className="btn" onClick={() => router.push("/register")}>
            Request free access
          </button>
        </div>
        <div className="container-right">
          <Image
            className="image"
            src={padclock}
            width={10000} 
            height={10000}
            alt="padclock"
          ></Image>
        </div>
      </div>
    </StyledInitialSection>
  );
};

export default InitialSection;
