import React from "react";
// import qs from "qs";
import { useState, useEffect } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject, useDebounce, useMount } from "utils/index";
import { useHttp } from "utils/http";
// const apiURL = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const debounceParam = useDebounce(param, 1000);
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const client = useHttp();

    useEffect(() => {
        client("projects", { data: cleanObject(debounceParam) }).then(
            (list) => {
                setList(list);
            }
        );

        // fetch(
        //     `${apiURL}/projects?${qs.stringify(cleanObject(debounceParam))}`
        // ).then(async (response) => {
        //     if (response.ok) {
        //         setList(await response.json());
        //     }
        // });
        // 第二种写法
        // fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then((response) => {
        //     return response.json()
        // }).then((res) => {
        //     setList(res)
        // })

        //eslint-disable-next-line
    }, [debounceParam]);
    useMount(() => {
        client("users", {}).then(setUsers);
        // fetch(`${apiURL}/users`).then(async (response) => {
        //     if (response.ok) {
        //         setUsers(await response.json());
        //     }
        // });
    });
    return (
        <div>
            <SearchPanel
                param={param}
                setParam={setParam}
                users={users}
            ></SearchPanel>
            <List list={list} users={users}></List>
        </div>
    );
};
