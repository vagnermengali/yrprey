import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Header from "@/components/Header";
import { StyledTransactionsSection } from "./style";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import SEO from "@/components/SEO";
import CardTransaction from "./CardTransation";
import { Context } from "@/context/context";

const TransactionsPages = () => {
  const { tokenLocal } = useContext(Context);
  const [listTransations, setListTransations] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchDataTransations = async (data: any) => {
      try {
        const response = await axios.post("http://yrprey.com/v2/status/", data);
        setListTransations(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchDataTransations({ token: tokenLocal });

  }, [tokenLocal]);

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
          <h1>My transactions</h1>
          {listTransations ? <>
          {listTransations.slice().reverse().map((transaction, index) => (
            <CardTransaction key={index} transaction={transaction} />
          ))}
          </> : 
          <>
          <p>There are no transactions</p>
          </>}
        </div>
      </StyledTransactionsSection>
      <Footer />
      <HomeButton />
    </motion.div>
  );
};

export default TransactionsPages;
