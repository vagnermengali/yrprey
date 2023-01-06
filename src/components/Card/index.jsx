import { StyledCard } from "./style";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Card({
  background_color,
  details_color,
  link_color,
  title,
  text_details,
  route,
  image,
}) {
  return (
    <StyledCard
      background_color={background_color}
      details_color={details_color}
      link_color={link_color}
    >
      <div className="content-up">
        <img src={image} alt="" className="image" />
      </div>
      <div className="content-down">
        <p className="title">{title}</p>
        <p className="details">{text_details}</p>
        <Link className="link" to={route}>
          Read Moreㅤ
          <FaArrowRight />
        </Link>
      </div>
    </StyledCard>
  );
}

export default Card;

{
  /* <StyledCard>
<img src={image} alt="" />
<div>
  <p className="title">{title}</p>
  <p className="details">{details}</p>
  <Link to={route}></Link>
</div>
</StyledCard> */
}
