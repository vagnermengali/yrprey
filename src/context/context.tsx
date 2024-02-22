import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { IChildren } from "@/interfaces/IChildren/IChildren";
import { IContext } from "@/interfaces/IContext/IContext";
import axios from "axios";

export const Context = createContext<IContext>({} as IContext)

const Provider = ({ children }: IChildren) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string>("")
  const router = useRouter();

  const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("http://yrprey.com/profile", data);
      if (response.data.results[0].status === 200) {
        setUser(response.data.results[0])
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem("token") || "")
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [router, token, setToken]);

  return (
    <Context.Provider value={{ router, token, isMobile, showSideBar, isSideBarVisible, setIsSideBarVisible, user, setUser, onSubmit }}>
      {children}
    </Context.Provider>);
};

export default Provider;
