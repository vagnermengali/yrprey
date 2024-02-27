import Image from "next/image";
import Link from "next/link";
import { Context } from "@/context/context";
import { StyledSidebar,Overlay, ContainerSidebar } from "./style";
import { useContext } from "react";

const Sidebar = () => {
  const { router, showSideBar } = useContext(Context);

  return (
    <>
    <StyledSidebar>
        <Overlay onClick={showSideBar}/>
        <ContainerSidebar>
        
        </ContainerSidebar>
    </StyledSidebar>
    </>
  );
}

export default Sidebar;
