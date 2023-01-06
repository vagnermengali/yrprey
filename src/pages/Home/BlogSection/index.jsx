import AOS from "aos";
import { useEffect } from "react";
import Card from "../../../components/Card";
import { StyledBlogSection } from "./style";
import nft2 from "../../../assets/image/collectibles/red/axe-red.png";
import nft1 from "../../../assets/image/collectibles/red/sword-red.png";
import nft3 from "../../../assets/image/collectibles/red/arrow-red.png";

function BlogSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <StyledBlogSection id="blog">
      <div className="container-blog">
        <p className="title-blog" data-aos="fade-in">
          Blog
        </p>
        <h4 data-aos="fade">
          Read Our Latest <span>Blog and News</span>
        </h4>
        <div className="content-center">
          <div data-aos="fade-right">
            <Card
              background_color="var(--grey-0)"
              details_color={"var(--grey-2)"}
              link_color={"var(--secondary-color)"}
              image={nft3}
              title="Protect Your Workplace From Cyber Attacks"
              text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
              route="/blog"
            />
          </div>
          <div data-aos="fade">
            <Card
              image={nft2}
              title="The Security Risks Of Cyber Changing Package"
              text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
              route="/blog"
            />
          </div>
          <div data-aos="fade-left">
            <Card
              background_color="var(--grey-0)"
              details_color={"var(--grey-2)"}
              link_color={"var(--secondary-color)"}
              image={nft1}
              title="Avoid Mistakes In Social And Media Posts"
              text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
              route="/blog"
            />
          </div>
        </div>
      </div>
    </StyledBlogSection>
  );
}

export default BlogSection;
