import Image from "next/image";
import Counter from "../Counter";
import { StyledBannerSection } from "./style";

const Banner = () => {

  return (
    <StyledBannerSection>
      <Image className="img-banner-about" src={''} alt="banner-main" width="100"
        height="100"
        sizes="100" />
      <Counter />
    </StyledBannerSection>
  );
}

export default Banner;
