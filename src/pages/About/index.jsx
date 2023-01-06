import { motion } from "framer-motion";
import { StyledAboutSection } from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FullPage, Slide } from "react-full-page";

function About() {
  document.title = "About Prey";
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
          <StyledAboutSection>
            <div className="container">
              <div className="content">
                <h1>Page under development...</h1>
              </div>
            </div>
          </StyledAboutSection>
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    </motion.div>
  );
}

export default About;
