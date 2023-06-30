import Image from "next/image";
import Counter from "../Counter";
import { StyledBannerSection } from "./style";
import banner from "@/assets/image/backgrounds/background-wallpaper.png"

const Banner = () => {

  return (
    <StyledBannerSection>
      <Image className="img-banner-about" src={banner} alt="banner-main" width={10000} height={10000} />
      <Counter />
    </StyledBannerSection>
  );
}

export default Banner;
