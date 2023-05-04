import React from "react";
import { StyledFirstTab } from "./style";
import { BsCheck2Circle } from "react-icons/bs";
import Link from "next/link";

const FirstTab = () => {
  
  return (
    <StyledFirstTab>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remainin...{" "}
        <Link href="/about" className="link">
          View more
        </Link>
      </p>
      <div className="topic">
        <div>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠTrusted Partner
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠProduct Security
          </p>
        </div>
        <div>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠSystem Security
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠOpertional Security
          </p>
        </div>
      </div>
    </StyledFirstTab>
  );
};
export default FirstTab;
