import { motion } from "framer-motion";
import CardShop from "../../../components/ShopCard"
import { useParams } from 'react-router-dom';
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { FullPage, Slide } from "react-full-page";
import { StyledCollectionsSection } from "./style";
import img from "../../../assets/image/collectibles/red/sword-red.png"

function Collections() {
  document.title = "Collections • Prey";
  const { id } = useParams();
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FullPage>
        <Slide>
          <Header />
          <StyledCollectionsSection>
            <div className="container">
              <div className="content">
                <CardShop title_image={"prey"} image={img} title={id}/>
                <CardShop title_image={"prey"} image={img} title={id}/>
                <CardShop title_image={"prey"} image={img} title={id}/>
                <CardShop title_image={"prey"} image={img} title={id}/>
                <CardShop title_image={"prey"} image={img} title={id}/>
                <CardShop title_image={"prey"} image={img} title={id}/>
              </div>
            </div>
          </StyledCollectionsSection>
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    </motion.div>
  );
}

export default Collections;
