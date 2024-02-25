import { motion } from "framer-motion";
import Header from "@/components/Header";
import { StyledTransactionsSection } from "./style";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import SEO from "@/components/SEO";
import CardTransaction from "./CardTransation";

const TransactionsPages = () => {

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Transactions • YRPrey"
        description="Join us in the search for bugs and vulnerabilities!"
      />
      <Header />
      <StyledTransactionsSection>
        <div className="container">
          <CardTransaction/>
        </div>
      </StyledTransactionsSection>
      <Footer />
      <HomeButton />
    </motion.div>
  );
};

export default TransactionsPages;
