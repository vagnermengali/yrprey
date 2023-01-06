import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ProviderPage = ({ children }) => {
  const navigate = useNavigate();
  return (
  <Context.Provider value={{ navigate }}>
    {children}
  </Context.Provider>);
};

export default ProviderPage;
