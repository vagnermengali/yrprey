import AOS from "aos";
import { StyledShopSection } from "./style";
import { useContext, useEffect } from "react";
import { Context } from "../../../providers/pageContext";
import CardShopClean from "../../../components/SimpleShopCard";
import nft3 from "../../../assets/image/collectibles/red/map-red.png";
import nft1 from "../../../assets/image/collectibles/red/book-red.png";
import nft2 from "../../../assets/image/collectibles/red/potion-red.png";

function ShopSection() {
  const { navigate } = useContext(Context);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <StyledShopSection>
      <div className="container-shop">
        <p className="title-shop" data-aos="fade-in">
          Shop
        </p>
        <h4 data-aos="fade">
          Buy, trade and hold <span>100+ Collectibles</span> on Prey
        </h4>
        <div className="content-center">
          <div data-aos="fade-down-right">
            <CardShopClean
              image={nft1}
              title_image={"book"}
              title="Prey Warrior Club #103"
            />
          </div>
          <div data-aos="fade">
            <CardShopClean
              image={nft2}
              title_image={"potion"}
              title="Prey Warrior Club #104"
            />
          </div>
          <div data-aos="fade-down-left">
            <CardShopClean
              image={nft3}
              title_image={"map"}
              title="Prey Warrior Club #105"
            />
          </div>
        </div>
        <butoon className="btn" onClick={() => navigate("/shop")}>
          View more
        </butoon>
      </div>
    </StyledShopSection>
  );
}

export default ShopSection;
