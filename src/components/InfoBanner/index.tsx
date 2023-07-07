import { BsCheck2 } from "react-icons/bs";
import { StyledInfoBanner, DivInfoBanner } from "./style";
import Image from "next/image";
import test from "@/assets/image/Illustrations/table.png"

const InfoBanner = () => {
  
  return (
    <StyledInfoBanner>
      <Image className="img-3d-card" src={test} width={10000} height={10000} alt="table"/>
      <DivInfoBanner>
        <h2>Use all your knowledge of security and vulnerabilities here</h2>
        <div>
          <p>
            <BsCheck2 className="icon" /> Test your security knowledge
          </p>
          <p>
            <BsCheck2 className="icon" /> Browse our blog full of
            vulnerabilities
          </p>
          <p>
            <BsCheck2 className="icon" /> Collect the collectibles full of bugs
          </p>
          <p>
            <BsCheck2 className="icon" /> Create your unsecured account
          </p>
        </div>
      </DivInfoBanner>
    </StyledInfoBanner>
  );
}

export default InfoBanner;
