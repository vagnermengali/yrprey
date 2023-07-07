import { NextRouter } from "next/router";

export interface IContext {
    router: NextRouter;
    token: boolean;
    cartVisible: boolean;
    setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;

}
