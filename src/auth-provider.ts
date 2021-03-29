import { User } from "screens/project-list/search-panel";
const apiURL = process.env.REACT_APP_API_URL;
const localStorageKey = " __auth_provider_token__";
export const getToken = () => window.localStorage.getItem(localStorageKey);
export const getUser = () => window.localStorage.getItem("user1");
export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || "");
    window.localStorage.setItem("user1", JSON.stringify(user) || "");
    return user;
};

export const login = (data: { username: string; password: string }) => {
    return fetch(`${apiURL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        if (response.ok) {
            return handleUserResponse(await response.json());
        } else {
            return Promise.reject(data);
        }
    });
};

export const register = (data: { username: string; password: string }) => {
    return fetch(`${apiURL}/register `, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        if (response.ok) {
            return handleUserResponse(await response.json());
        } else {
            return Promise.reject(data);
        }
    });
};

export const logout = async () =>
    window.localStorage.removeItem(localStorageKey);
