import styled from "styled-components";
import { SidebarStyleProps } from "@/interfaces/SidebarProps/SidebarProps";

export const StyledMenuBurger = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 40px;
  cursor: pointer;
`;

export const MenuAnimation = styled.span <SidebarStyleProps>`
  width: 100%;
  transition: background-color .3s ease-in-out;
  height: ${(props) => (props?.isSideBarVisible ? "4px" : props?.isMobile ? "3px" : "3px")};
  background-color: ${(props) => (props?.isSideBarVisible ? "var(--transparent)" : props?.isMobile ? "var(--white)" : "var(--transparent)")};;

  &:before {
    content: "";
    background-color: var(--white);
    display: block;
    transition: all .3s ease-in-out;
    height: ${(props) => (props?.isSideBarVisible ? "4px" : props?.isMobile ? "3px" : "3px")};
    transform: ${(props) => (props?.isSideBarVisible ? "rotateZ(-45deg) translateY(0)" : props?.isMobile ? "translateY(-0.625rem)" : "translateY(-.625rem)")};
  }

  &:after {
    content: "";
    background-color: var(--white);
    display: block;
    transition: all .3s ease-in-out;
    height: ${(props) => (props?.isSideBarVisible ? "4px" : props?.isMobile ? "3px" : "3px")};
    transform: ${(props) => (props?.isSideBarVisible ? "rotateZ(45deg) translateY(0)" : props?.isMobile ? "translateY(.625rem)" : "translateY(.625rem)")};
    margin-top: -0.25rem;
  }
`;
