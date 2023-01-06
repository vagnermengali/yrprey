import { motion } from "framer-motion";
import ShopSection from "./ShopSection";
import BlogSection from "./BlogSection";
import AboutSection from "./AboutSection";
import Header from "../../components/Header";
import InitialSection from "./InitialSection";
import ContactSection from "./ContactSection";
import { FullPage, Slide } from "react-full-page";

function Home() {
  document.title = "Welcome to Prey";
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
            <InitialSection />
          </Slide>
          <Slide>
            <AboutSection />
          </Slide>
          <Slide>
            <ShopSection />
          </Slide>
          <Slide>
            <BlogSection />
          </Slide>
          <Slide>
            <ContactSection />
          </Slide>
        </FullPage>
      </motion.div>
    </>
  );
}

export default Home;
