import { Context } from "@/context/context";
import { useContext } from "react";
import { StyledStatusApi } from "./style";

const StatusApi = () => {
    const { statusApi } = useContext(Context);
    return (
        <>
            <StyledStatusApi style={{ background: statusApi }}> 
                {statusApi === "green" ? (
                    <>
                    <p>Back end on</p>
                    </>
                ) : (
                    <>
                    <p>Back end off</p>
                    </>)}
            </StyledStatusApi>
        </>
    )
}

export default StatusApi;