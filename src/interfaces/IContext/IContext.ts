import { NextRouter } from "next/router";

export interface IContext {
    router: NextRouter;
    token: any;
    isMobile: boolean;
    isSideBarVisible: boolean;
    setIsSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: () => void;
    user: any;
    setUser: any;
    onSubmit: any;
    setToken: any;
    logout: any;
}
