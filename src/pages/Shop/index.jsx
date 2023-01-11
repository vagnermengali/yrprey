import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopCollections from "./Top collections";

function Shop() {
  document.title = "Shop • YRPrey";
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
          <Header />
          <Carousel />
          <TopCollections />
          <Footer />
    </motion.div>
  );
}

export default Shop;
