import AOS from "aos";
import { StyledShopSection } from "./style";
import { useContext, useEffect } from "react";
import { Context } from "@/context/context";
import CardShopClean from "@/components/SimpleShopCard";
import nft3 from "@/assets/image/collectibles/red/map-red.png";
import nft1 from "@/assets/image/collectibles/red/book-red.png";
import nft2 from "@/assets/image/collectibles/red/potion-red.png";

const ShopSection = () => {
  const { router } = useContext(Context);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <StyledShopSection>
      <div className="container-shop">
        <p className="title-shop" data-aos="fade-in">
          Shop
        </p>
        <h3 data-aos="fade">
          Buy, trade and hold <span>100+ Collectibles</span> on YRYRPrey
        </h3>
        <div className="content-center">
          <div data-aos="fade-down-right">
            <CardShopClean
              image={nft1}
              title_image={"book"}
              title="YRPrey Club Red"
            />
          </div>
          <div data-aos="fade">
            <CardShopClean
              image={nft2}
              title_image={"potion"}
              title="YRPrey Club Red"
            />
          </div>
          <div data-aos="fade-down-left">
            <CardShopClean
              image={nft3}
              title_image={"map"}
              title="YRPrey Club Red"
            />
          </div>
        </div>
        <div className="btn-view-more" onClick={() => router.push("/shop")}>
          <button className="btn-view-more-inside" onClick={() => router.push("/shop")}>
            View more
          </button>
        </div>
      </div>
    </StyledShopSection>
  );
};

export default ShopSection;
