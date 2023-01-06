import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ContainerSection } from "./style";
import Header from "../../components/Header";
import { FaArrowRight } from "react-icons/fa";
import spacecraft from "../../assets/image/Illustrations/Illustration-cyber-6.svg";

function Error() {
  document.title = "Página não encotrada";

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
            <div className="divLinks">
              <p>Algo deu errado...</p>
              <p>
                Não conseguimos encontrar a página que você está procurando.
              </p>
              <Link className="link" to="/">
                Voltar para a página principal ㅤ<FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="container-right">
            <img src={spacecraft} alt="spacecraft" />
          </div>
        </div>
      </ContainerSection>
    </motion.div>
  );
}

export default Error;
