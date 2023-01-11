import React, { useContext } from "react";
import { HeaderContainer, DivHeader } from "./style";
import { Context } from "../../providers/pageContext";
import logo from "../../assets/image/logos/logo-letter.svg";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

function Header() {
  const { navigate } = useContext(Context);

  return (
    <>
      <HeaderContainer>
        <DivHeader>
          <div className="content">
            <div>
              <LinkRouter to="/">
                <img src={logo} alt="logo-letter" />
              </LinkRouter>
            </div>
            <nav>
              <LinkRouter to="/" className="link">
                Homepage
              </LinkRouter>
              <LinkRouter to="/about" className="link">
                About us
              </LinkRouter>
              <LinkRouter to="/shop" className="link">
                Shop
              </LinkRouter>
              <LinkRouter to="/blog" className="link">
                Blog
              </LinkRouter>
            </nav>
            <div className="login-register">
              <button className="login" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="btn" onClick={() => navigate("/register")}>
                Get started
              </button>
            </div>
          </div>
        </DivHeader>
      </HeaderContainer>
    </>
  );
}

export default Header;
