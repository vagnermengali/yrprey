import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { IChildren } from "@/interfaces/IChildren/IChildren";
import { IContext } from "@/interfaces/IContext/IContext";

export const Context = createContext<IContext>({} as IContext)

const Provider = ({ children }: IChildren) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
  const router = useRouter();
  const token = false

  const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
  <Context.Provider value={{ router, token, isMobile, showSideBar, isSideBarVisible, setIsSideBarVisible }}>
    {children}
  </Context.Provider>);
};

export default Provider;
