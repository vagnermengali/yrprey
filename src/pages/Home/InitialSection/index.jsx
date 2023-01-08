import { useContext } from "react";
import { StyledInitialSection } from "./style";
import { Context } from "../../../providers/pageContext";
import padclock from "../../../assets/image/Illustrations/Illustration-cyber-31.svg";

function InitialSection() {
  const { navigate } = useContext(Context);

  return (
    <StyledInitialSection>
      <div className="container">
        <div className="container-left">
          <h1>
            Your Complete <span>Vulnerability</span> Site.
          </h1>
          <p>Find the most beautiful collectibles in one place!</p>
          <button className="btn" onClick={() => navigate("/register")}>
            Request free access
          </button>
        </div>
        <div className="container-right">
          <img className="image" src={padclock} alt="padclock" />
        </div>
      </div>
    </StyledInitialSection>
  );
}

export default InitialSection;
