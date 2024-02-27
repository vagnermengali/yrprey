import { useContext } from "react";
import { Context } from "@/context/context";
import { MenuAnimation, StyledMenuBurger } from "./style";

const MenuBurguer = () => {
    const { showSideBar, isSideBarVisible, isMobile } = useContext(Context);

    return (
        <StyledMenuBurger onClick={showSideBar}>
            <MenuAnimation
                isSideBarVisible={isSideBarVisible}
                isMobile={isMobile}
                onClick={showSideBar}
            ></MenuAnimation>
        </StyledMenuBurger>
    );
};

export default MenuBurguer;
