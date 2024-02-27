import Link from "next/link";
import { Context } from "@/context/context";
import { StyledSidebar, Overlay, ContainerSidebar } from "./style";
import { useContext } from "react";
import axios from "axios";

const Sidebar = () => {
  const { router, tokenLocal, setUser, showSideBar } = useContext(Context);

  const onProfile = async (data: any) => {
    try {
      const response = await axios.post("http://yrprey.com/profile", data);
      if (response.data.results[0].status === 200) {
        setUser(JSON.stringify(response.data.results[0]))
      }
    } catch (error) {
      error
    }
  };

  const onLogout = async (data: any) => {
    try {
      const response = await axios.post("http://yrprey.com/logout", data);
      if (response.data.results[0].status === 200) {
        const responseData = response?.data?.results[0];
        window.location.href = responseData.msg;
      }
    } catch (error) {
      error
    }
  };

  return (
    <>
      <StyledSidebar>
        <Overlay onClick={showSideBar} />
        <ContainerSidebar>
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
            {
              tokenLocal && <>
                <Link href="/transactions" className="link">
                  My transactions
                </Link>
              </>
            }
          </nav>
          {tokenLocal ? (
            <div className="login-register">
              <button className="login" onClick={() => {
                onLogout({ token: tokenLocal, url: "/" })
                localStorage.clear()
              }}>
                Logout
              </button>
              <button className="btn-register" onClick={() => {
                onProfile({ token: tokenLocal })
                router.push("/profile")
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
        </ContainerSidebar>
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
