import { motion } from "framer-motion";
import CardShop from "@/components/ShopCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { StyledCollectionsSection } from "./style";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface ColorData {
  [key: string]: Product[];
}

interface Product {
  title_image: string;
  image: string;
  title: string;
  name: string;
  value: string;
}

const Collections = () => {
  const router = useRouter();
  const { id } = router.query;

  const [productsList, setProductsList] = useState<ColorData>({});

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response: AxiosResponse<ColorData> = await axios.get("http://yrprey.com/cards");
        console.log(response);
        if (response.data) {
          setProductsList(response.data);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const renderProducts = (productsList: Product[]) => { 
    return productsList.map((product: Product, index: number) => (
      <CardShop
        id={index}
        key={index}
        title_image={product.title_image}
        image={require(`@/assets/image/collectibles/${id}/${product.image}.png`)}
        title={product.title}
        name={product.name}
        value={product.value}
      />
    ));
  };

  const products = productsList[id as string];

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
            {products && renderProducts(products)}
          </ul>
        </div>
      </StyledCollectionsSection>
      <Footer />
    </motion.div>
  );
};

export default Collections;
