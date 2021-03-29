import React from "react";
import "./App.css";
// import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import { UnAuthenticatedApp } from "unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app";
function App() {
    const { user } = useAuth();
    console.log(user);
    return (
        <div className="App">
            {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </div>
    );
}

export default App;
