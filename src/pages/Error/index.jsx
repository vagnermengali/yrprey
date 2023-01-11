import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ContainerSection } from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaArrowRight } from "react-icons/fa";
import spacecraft from "../../assets/image/Illustrations/altar-2.svg";

function Error() {
  document.title = "Page not found";
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
          <Header />
          <ContainerSection>
            <div className="container">
              <div className="container-left">
                <h1>Oops!</h1>
                <div className="div-links">
                  <p>Something went wrong...</p>
                  <p>We could not find the page you are looking for.</p>
                  <Link className="link" to="/">
                    Back to main page ㅤ<FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="container-right">
                <img src={spacecraft} alt="spacecraft" />
              </div>
            </div>
          </ContainerSection>
          <Footer />
    </motion.div>
  );
}

export default Error;
