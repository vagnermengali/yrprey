import { motion } from "framer-motion";
import CardShop from "@/components/ShopCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { StyledCollectionsSection } from "./style";
import swordRed from "@/assets/image/collectibles/red/sword-red.png";
import arrowRed from "@/assets/image/collectibles/red/arrow-red.png";
import axeRed from "@/assets/image/collectibles/red/axe-red.png";
import bookRed from "@/assets/image/collectibles/red/book-red.png";
import mapRed from "@/assets/image/collectibles/red/map-red.png";
import potionRed from "@/assets/image/collectibles/red/potion-red.png";
import axeBlue from "@/assets/image/collectibles/blue/axe-blue.png";
import bookBlue from "@/assets/image/collectibles/blue/book-blue.png";
import mapBlue from "@/assets/image/collectibles/blue/map-blue.png";
import potionBlue from "@/assets/image/collectibles/blue/potion-blue.png";
import shieldBlue from "@/assets/image/collectibles/blue/shield-blue.png";
import swordBlue from "@/assets/image/collectibles/blue/sword-blue.png";
import swordWhite from "@/assets/image/collectibles/white/sword-white.png";
import helmetWhite from "@/assets/image/collectibles/white/helmet-white.png";
import mapWhite from "@/assets/image/collectibles/white/map-white.png";
import potionWhite from "@/assets/image/collectibles/white/potion-white.png";
import shieldWhite from "@/assets/image/collectibles/white/shield-white.png";
import bookWhite from "@/assets/image/collectibles/white/book-white.png";
import swordCian from "@/assets/image/collectibles/cian/sword-cian.png";
import helmetCian from "@/assets/image/collectibles/cian/axe-cian.png";
import mapCian from "@/assets/image/collectibles/cian/map-cian.png";
import potionCian from "@/assets/image/collectibles/cian/potion-cian.png";
import shieldCian from "@/assets/image/collectibles/cian/shield-cian.png";
import bookCian from "@/assets/image/collectibles/cian/book-cian.png";
import axeBeige from "@/assets/image/collectibles/beige/axe-beige.png";
import bookBeige from "@/assets/image/collectibles/beige/book-beige.png";
import mapBeige from "@/assets/image/collectibles/beige/map-beige.png";
import potionBeige from "@/assets/image/collectibles/beige/potion-beige.png";
import shieldBeige from "@/assets/image/collectibles/beige/shield-beige.png";
import swordBeige from "@/assets/image/collectibles/beige/sword-beige.png";
import { useRouter } from "next/router";

const Collections = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <StyledCollectionsSection>
        <div className="container">
          <div className="content">
            {id == "red" ? (
              <>
                <CardShop
                  title_image={"YRPrey"}
                  image={swordRed}
                  title={id}
                  name={"Sword"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={mapRed}
                  title={id}
                  name={"Map"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={bookRed}
                  title={id}
                  name={"Book"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={potionRed}
                  title={id}
                  name={"Potion"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={axeRed}
                  title={id}
                  name={"Axe"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={arrowRed}
                  title={id}
                  name={"Arrow"}
                />
              </>
            ) : null}
            {id == "blue" ? (
              <>
                <CardShop
                  title_image={"YRPrey"}
                  image={axeBlue}
                  title={id}
                  name={"Axe"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={mapBlue}
                  title={id}
                  name={"Map"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={bookBlue}
                  title={id}
                  name={"Book"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={swordBlue}
                  title={id}
                  name={"Sword"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={potionBlue}
                  title={id}
                  name={"Potion"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={shieldBlue}
                  title={id}
                  name={"Shield"}
                />
              </>
            ) : null}
            {id == "cian" ? (
              <>
                <CardShop
                  title_image={"YRPrey"}
                  image={mapCian}
                  title={id}
                  name={"Map"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={bookCian}
                  title={id}
                  name={"Book"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={swordCian}
                  title={id}
                  name={"Sword"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={helmetCian}
                  title={id}
                  name={"Helmet"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={potionCian}
                  title={id}
                  name={"Potion"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={shieldCian}
                  title={id}
                  name={"Shield"}
                />
              </>
            ) : null}
            {id == "white" ? (
              <>
                <CardShop
                  title_image={"YRPrey"}
                  image={mapWhite}
                  title={id}
                  name={"Map"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={bookWhite}
                  title={id}
                  name={"Book"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={swordWhite}
                  title={id}
                  name={"Sword"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={helmetWhite}
                  title={id}
                  name={"Helmet"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={potionWhite}
                  title={id}
                  name={"Potion"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={shieldWhite}
                  title={id}
                  name={"Shield"}
                />
              </>
            ) : null}
            {id == "beige" ? (
              <>
                <CardShop
                  title_image={"YRPrey"}
                  image={axeBeige}
                  title={id}
                  name={"Axe"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={mapBeige}
                  title={id}
                  name={"Map"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={bookBeige}
                  title={id}
                  name={"Book"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={swordBeige}
                  title={id}
                  name={"Sword"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={potionBeige}
                  title={id}
                  name={"Potion"}
                />
                <CardShop
                  title_image={"YRPrey"}
                  image={shieldBeige}
                  title={id}
                  name={"Shield"}
                />
              </>
            ) : null}
          </div>
        </div>
      </StyledCollectionsSection>
      <Footer />
    </motion.div>
  );
};

export default Collections;
