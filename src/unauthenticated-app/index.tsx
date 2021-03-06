import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
export const UnAuthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <>
            {isRegister ? <RegisterScreen /> : <LoginScreen />}
            <button onClick={() => setIsRegister(!isRegister)}>
                切换到 {isRegister ? "登入" : "注册"}
            </button>
        </>
    );
};
