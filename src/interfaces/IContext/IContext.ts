import { NextRouter } from "next/router";

export interface IContext {
    router: NextRouter;
    token: boolean;
    isMobile: boolean;
    isSideBarVisible: boolean;
	setIsSideBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
	showSideBar: () => void
}
