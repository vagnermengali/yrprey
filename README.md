import { motion } from "framer-motion";
import CardShop from "@/components/ShopCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { StyledCollectionsSection } from "./style";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

// Defina uma interface para o tipo de dados esperado da API
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

  const [productsList, setProductsList] = useState<Product[]>([]); // Definir o tipo como Product[]

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response: AxiosResponse<Product[]> = await axios.get("http://yrprey.com/cards"); // Definir o tipo de resposta como AxiosResponse<Product[]>
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

  const renderProducts = (productsList: Product[]) => { // Definir o tipo como Product[]
    return productsList.map((product: Product, index: number) => ( // Definir o tipo como Product e number
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

  const products = productsList.find((collection: any) => Object.keys(collection)[0] === id);

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
