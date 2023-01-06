import { StyledInitialSection } from "./style";
import { useNavigate } from "react-router-dom";
import padclock from "../../../assets/image/Illustrations/Illustration-cyber-3.svg";

function InitialSection() {
  const navigate = useNavigate();
  return (
    <StyledInitialSection id="home">
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