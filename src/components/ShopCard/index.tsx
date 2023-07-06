import Image from "next/image";
import { StyledCardShop } from "./style";
import { FaCheckCircle, FaEthereum } from "react-icons/fa";
import { ICardShop } from "@/interfaces/IChildren/ICardShop";
import { useContext } from "react";
import { Context } from "@/context/context";

const CardShop = ({ image, title_image, title, name }: ICardShop) => {
  const { router } = useContext(Context);
  return (
    <StyledCardShop>
      <li className="card-container-shop">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>
            <Image
              src={image}
              width="100"
              height="100"
              sizes="100"
              alt={title_image}
              className="img-card-shop"
            ></Image>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="text-content">
            <div>
              <h1 className="text-title">
                YRPrey Club {title}
                <span>
                  ﾠ<FaCheckCircle className="checked" />
                </span>
              </h1>
              <span>
                <FaEthereum className="eth" />
              </span>
            </div>
            <p className="text-name-item">{name}-{title}</p>
          </div>
          <div className="container-button">
            <div className="text-details">
              <p>Price</p>
              <p>2.5 ETH</p>
            </div>
            <div className="btn-puschase-item" onClick={() => alert("abrir modal e perguntar se quer continuar comprar ou ir para o carrinho")}>
              <button className="btn-puschase-item-inside" onClick={() => alert("abrir modal e perguntar se quer continuar comprar ou ir para o carrinho")}>Puschase</button>
            </div>
          </div>
        </div>
      </div>
      </li>
    </StyledCardShop>
  );
}

export default CardShop;
