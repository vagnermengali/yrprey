import { motion } from "framer-motion";
import CardShop from "@/components/ShopCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { StyledCollectionsSection } from "./style";
import collectionsData from "@/data/products.json";
import { useRouter } from "next/router";

const Collections = () => {
  const router = useRouter();
  const { id } = router.query;

  const renderProducts = (products: any) => {
    return products.map((product: any, index: any) => (
      <CardShop
        key={index}
        title_image={product.title_image}
        image={require(`@/assets/image/collectibles/${id}/${product.image}.png`)}
        title={product.title}
        name={product.name}
        value={product.value}
      />
    ));
  };

  const products = collectionsData.find((collection: any) => Object.keys(collection)[0] === id);

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
          <ul className="content">
            {products && renderProducts(Object.values(products)[0])}
          </ul>
        </div>
      </StyledCollectionsSection>
      <Footer />
    </motion.div>
  );
};

export default Collections;
