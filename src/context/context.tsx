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
  const [tokenLocal, setTokenLocal] = useState<string>("")
  const [statusApi, setStatusApi] = useState<string>("")
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

  const logout = async (data: any) => {
    try {
      const response = await axios.post("http://yrprey.com/logout", data);
      if (response.data.results[0].status === 200) {
        const responseData = response?.data?.results[0];
        window.location.href = responseData.msg;
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  const apiStatus = async () => {
    try {
      const response = await axios.get("http://yrprey.com/ssrf", {
        params: {
          endereco: "localhost",
          port: 80
        }
      });
      if (response.data.results[0].status === 200) {
        setStatusApi("green");
      } else {
        setStatusApi("red");
      }
    } catch (error) {
      error
    }
  };
  
  useEffect(() => {
    apiStatus()
  }, [statusApi, setStatusApi])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTokenLocal(localStorage.getItem("token") || "")
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [router, tokenLocal, setTokenLocal]);


  return (
    <Context.Provider value={{ router, tokenLocal, isMobile, showSideBar, isSideBarVisible, setIsSideBarVisible, user, setUser, onSubmit, setTokenLocal, logout, statusApi }}>
      {children}
    </Context.Provider>);
};

export default Provider;
