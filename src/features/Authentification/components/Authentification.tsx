import { LoginCard } from "./LoginCard";
import { LoggedCard } from "./LoggedCard";
import { useState } from "react";

export const Authentification = () => {

    const [isConnected, setIsConnected] = useState(false);

    const auth = () => {
        setIsConnected(!isConnected);
    }


    return (!isConnected && <LoginCard authUserAction={auth} /> || <LoggedCard authUserAction={auth}/>)
};
