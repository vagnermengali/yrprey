import React, { useContext, useState, useEffect } from "react";
import { HeaderContainer, DivHeader } from "./style";
import { Context } from "@/context/context";
import logo from "@/assets/image/logos/logo-letter.svg";
import Image from "next/image";
import Link from "next/link";
import StatusApi from "../StatusApi";

const Header = () => {
  const { router, token, isMobile, onSubmit, logout } = useContext(Context);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <DivHeader>
          <div className="content">
            <div>
              <Link href="/">
                <Image
                  src={logo}
                  width={130}
                  height={40}
                  sizes="100"
                  alt="logo-letter"
                  className="logo-header"
                ></Image>
              </Link>
            </div>
            {isMobile ? (
              <></>
            ) : (
              <>
                <nav>
                  <Link href="/" className="link">
                    Homepage
                  </Link>
                  <Link href="/about" className="link">
                    About us
                  </Link>
                  <Link href="/shop" className="link">
                    Shop
                  </Link>
                  <Link href="/blog" className="link">
                    Blog
                  </Link>
                </nav>
                {token ? (
                  <div className="login-register">
                    <button className="login" onClick={() => {
                      logout({ token: token, url: "/" })
                      localStorage.clear()
                    }}>
                      Logout
                    </button>
                    <button className="btn-register" onClick={() => {
                      onSubmit({ token: token })
                      router.push("/")
                    }}>
                      My account
                    </button>
                  </div>
                ) : (
                  <div className="login-register">
                    <button className="login" onClick={() => router.push("/login")}>
                      Login
                    </button>
                    <button className="btn-register" onClick={() => router.push("/register")}>
                      Get started
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </DivHeader>
      </HeaderContainer>
      <StatusApi/>
    </>
  );
};

export default Header;