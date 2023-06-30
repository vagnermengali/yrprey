import Image from "next/image";
import Counter from "../Counter";
import { StyledBannerSection } from "./style";
import banner from "@/assets/image/backgrounds/background-wallpaper.png"

const Banner = () => {

  return (
    <StyledBannerSection>
      <Image className="img-banner-about" src={banner} alt="banner-main" width="100"
        height="100"
        sizes="100" />
      <Counter />
    </StyledBannerSection>
  );
}

export default Banner;
