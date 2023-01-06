import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import React from "react";
import Carousel from "./Carousel";
import { FullPage, Slide } from "react-full-page";

function Shop() {
  document.title = "PREY - Shop";
  return (
    <>
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
            <Footer />
          </Slide>
        </FullPage>
      </motion.div>
    </>
  );
}

export default Shop;
