import Image from "next/image";
import { StyledCardShopClean } from "./style";
import Link from "next/link";
import { useRouter } from "next/router";
import { ICardShopClean } from "@/interfaces/IChildren/ICardShop";

const CardShopClean = ({ image, title_image, title }: ICardShopClean) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <StyledCardShopClean>
      <Link href="/shop/collection/red" className="link">
        <Image
          className="card-img"
          src={image}
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
