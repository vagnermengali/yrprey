import { NextRouter } from "next/router";

export interface IContext {
    router: NextRouter;
    token: boolean;
}
