import Image from "next/image";
import Link from "next/link";

import { StyledCardShopClean } from "./style";

import { ICardShopClean } from "@/interfaces/IChildren/ICardShop";

const CardShopClean = ({ image, title_image, title }: ICardShopClean) => {

  return (
    <StyledCardShopClean>
      <Link href="/shop/collection/red" className="link">
        <Image
          className="card-img"
          src={image}
          width="100"
          height="100"
          sizes="100"
          alt={title_image}
        ></Image>
        <div className="card-details">
          <p className="text-title">{title}</p>
        </div>
      </Link>
    </StyledCardShopClean>
  );
}

export default CardShopClean;
