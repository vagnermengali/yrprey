import FormContact from "./Form";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import { StyledLogintSection } from "./style";

function LoginSection() {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledLogintSection id="contact">
        <Header />
        <div className="container">
          <div className="container-left">
            <div className="content-up">
              <h1>
                Ready to roll up your <span>sleeves again?</span>
              </h1>
              <FormContact />
            </div>
          </div>
          <div className="container-right">
          </div>
        </div>
      </StyledLogintSection>
    </motion.div>
  );
}

export default LoginSection;
