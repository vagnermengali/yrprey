import { useContext } from "react";
import { StyledCart } from "./style";
import { Context } from "@/context/context";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Cart = () => {
  const { setCartVisible, cartVisible, router } = useContext(Context);
  document.body.style.overflow = "hidden";

  const sidebarVariants = {
    hidden: {
      x: 375,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 3000,
        staggerChildren: 0.025
      }
    },
    visible: {
      x: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: .3,
        staggerChildren: 0.025
      }
    },
    exit: {
      x: 375,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 300,
        staggerChildren: 0.025
      }
    },
  };

  const cartContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <StyledCart>
        <motion.div
          className="cart-container"
          initial="hidden"
          animate={cartVisible ? "visible" : "hidden"}
          exit="exit"
          variants={cartContainer}
          onClick={() => {
            setCartVisible(!cartVisible)
            document.body.style.overflow = "unset"
          }}
        >
        </motion.div>
        <motion.div
          className="cart"
          initial="hidden"
          animate={cartVisible ? "visible" : "hidden"}
          exit="exit"
          variants={sidebarVariants}>
          <div className="header-cart">
            <h1>Carrinho</h1>
            <Image className="close-cart" alt="close" src={"/icons/close.svg"} width={100} height={100} onClick={() => {
              setCartVisible(!cartVisible)
              document.body.style.overflow = "unset"
            }} />
          </div>
          <ul className="list-cart">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
          <div className="footer-cart">
            <div className="footer-cart-price">
              <p>Total</p>
              <p>R$ 259,00</p>
            </div>
            <div className="footer-cart-button-finish" onClick={() => {
              setCartVisible(!cartVisible)
              document.body.style.overflow = "unset"
              router.push("/checkout")
            }}>
              <button className="footer-cart-button-finish-inside" onClick={() => {
                setCartVisible(!cartVisible)
                document.body.style.overflow = "unset"
                router.push("/checkout")
              }}>
                Finalizar compra
              </button>
            </div>
            <div className="footer-cart-button-continue" onClick={() => {
              setCartVisible(!cartVisible)
              document.body.style.overflow = "unset"
            }}>
              <button className="footer-cart-button-continue-inside" onClick={() => {
                setCartVisible(!cartVisible)
                document.body.style.overflow = "unset"
              }}>
                Continuar comprando
              </button>
            </div>
          </div>
        </motion.div>
      </StyledCart>
    </AnimatePresence>
  );
};

export default Cart;
