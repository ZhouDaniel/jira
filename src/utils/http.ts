import { useAuth } from "context/auth-context";
import qs from "qs";
import * as auth from "auth-provider";

const apiURL = process.env.REACT_APP_API_URL;
interface addRequestInit {
    data?: object;
    token?: string | undefined;
    headers?: string;
}

export const http = async (
    endpoint: string,
    { data, token, headers, ...customConfig }: addRequestInit
) => {
    const config: any = {
        method: "GET",
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": data ? "application/json" : "",
        },
        ...customConfig,
    };
    if (config.method.toUpperCase() === "GET") {
        endpoint += `?${qs.stringify(data)}`;
    } else {
        config.body = JSON.stringify(data || {});
    }
    return window
        .fetch(`${apiURL}/${endpoint}`, config)
        .then(async (response) => {
            if (response.status === 401) {
                auth.logout();
                window.location.reload();
                return Promise.reject({ message: "请重新登入" });
            }
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        });
};

export const useHttp = () => {
    const { user } = useAuth();
    return (...[endpoint, config = {}]: Parameters<typeof http>) =>
        http(endpoint, { ...config, token: user?.token });
};
