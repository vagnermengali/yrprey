import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopCollections from "./Top collections";
import { FullPage, Slide } from "react-full-page";

function Shop() {
  document.title = "Shop • Prey";
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
          <Carousel />
        </Slide>
        <Slide>
          <TopCollections />
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    </motion.div>
  );
}

export default Shop;
