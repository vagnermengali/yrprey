import { Link, useParams } from "react-router-dom";
import { StyledCardShopClean } from "./style";

function CardShopClean({ image, title_image, title }) {
  const { id } = useParams();
  return (
    <StyledCardShopClean>
      <Link to="/shop/collection/red" className="link">
        <img src={image} alt={title_image} class="card-img" />
        <div class="card-details">
          <p class="text-title">{title}</p>
        </div>
      </Link>
    </StyledCardShopClean>
  );
}

export default CardShopClean;
