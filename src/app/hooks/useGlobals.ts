import { Member } from "../../lib/types/member";
import { createContext, useContext } from "react";

interface GlobalInterface {
    authMember: Member | null;
    setAuthMember: (member: Member | null) => void;
    orderBuilder: Date;
    setOrderBuilder: (input: Date) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
    undefined
);

export const useGlobals = () => {
    const context = useContext(GlobalContext);
    if(context === undefined) 
        throw new Error("useGlobals withit Provider")

    return context;
};