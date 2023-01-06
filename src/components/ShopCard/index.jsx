import { StyledCardShop } from "./style";
import { FaCheckCircle, FaEthereum, FaBitcoin } from "react-icons/fa";

function CardShop({ image, title_image, title }) {
  return (
    <StyledCardShop>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div>
            <img src={image} />
          </div>
        </div>
        <div class="flip-card-back">
          <div class="text-content">
            <div>
              <h1 class="text-title">
                Prey Warrior Club 
                <span>
                  {title}ﾠ<FaCheckCircle className="checked" />
                </span>
              </h1>
              <span>
                <FaEthereum className="eth" />
              </span>
            </div>
            <p className="text-name-item">Sword-Red #104</p>
          </div>
          <div class="container-button">
            <div class="text-details">
              <p>Price</p>
              <p>2.5 ETH</p>
            </div>
            <button className="puschase-button-item">Puschase</button>
          </div>
        </div>
      </div>
    </StyledCardShop>
  );
}

export default CardShop;
