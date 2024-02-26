import AOS from "aos";
import { StyledShopSection } from "./style";
import { useContext, useEffect } from "react";
import { Context } from "@/context/context";
import CardShopClean from "@/components/SimpleShopCard";

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
              image={"/map-red.webp"}
              title_image={"book"}
              title="YRPrey Club Red"
            />
          </div>
          <div data-aos="fade">
            <CardShopClean
              image={"/potion-red.webp"}
              title_image={"potion"}
              title="YRPrey Club Red"
            />
          </div>
          <div data-aos="fade-down-left">
            <CardShopClean
              image={"/map-red.webp"}
              title_image={"map"}
              title="YRPrey Club Red"
            />
          </div>
        </div>
          <button className="btn-view-more" onClick={() => router.push("/shop")}>
            View more
          </button>
      </div>
    </StyledShopSection>
  );
};

export default ShopSection;
