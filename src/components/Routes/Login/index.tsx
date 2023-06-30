import FormLogin from "./Form";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { StyledLoginSection } from "./style";
import InfoBanner from "@/components/InfoBanner";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import SEO from "@/components/SEO";

const Login = () => {

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Login • YRPrey"
        description="Join us in the search for bugs and vulnerabilities!"
      />
      <StyledLoginSection>
        <Header />
        <div className="container">
          <div className="container-left">
            <div className="content-up">
              <h1>
                Ready to roll up your <span>sleeves again?</span>
              </h1>
              <FormLogin />
            </div>
          </div>
          <div className="container-right">
            <InfoBanner />
          </div>
        </div>
        <Footer />
        <HomeButton />
      </StyledLoginSection>
    </motion.div>
  );
}

export default Login;
