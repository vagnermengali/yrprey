import { StyledCardShopClean } from "./style";

function CardShopClean({image, title_image, title}) {
  return (
      <StyledCardShopClean>
            <img src={image} alt={title_image} class="card-img" />
            <div class="card-details">
              <p class="text-title">{title}</p>
            </div>
      </StyledCardShopClean>
  );
}

export default CardShopClean;
