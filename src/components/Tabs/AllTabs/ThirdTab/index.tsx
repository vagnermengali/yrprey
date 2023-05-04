import React from "react";
import { StyledThirdTab } from "./style";
import { BsCheck2Circle } from "react-icons/bs";
import Link from "next/link";

const ThirdTab = () => {
  return (
    <StyledThirdTab>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isnt
        anything embarrassing hidden in the middle of tex...
        <Link href="/about" className="link">
          View more
        </Link>
      </p>
      <div className="topic">
        <div>
          {" "}
          <p>
            <BsCheck2Circle className="icon" />
            ﾠProduct Security
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠTrusted Partner
          </p>
        </div>

        <div>
          {" "}
          <p>
            <BsCheck2Circle className="icon" />
            ﾠOpertional Security
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠSystem Security
          </p>
        </div>
      </div>
    </StyledThirdTab>
  );
};
export default ThirdTab;
