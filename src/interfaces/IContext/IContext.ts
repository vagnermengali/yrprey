import { NextRouter } from "next/router";

export interface IContext {
    router: NextRouter;
    tokenLocal: any;
    isMobile: boolean;
    isSideBarVisible: boolean;
    setIsSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: () => void;
    user: any;
    setUser: any;
    onSubmit: any;
    setTokenLocal: any;
    logout: any;
    statusApi: string;
}
