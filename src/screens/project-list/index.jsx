import React from 'react'
import * as qs from 'qs'
import { useState,useEffect } from "react";
import {SearchPanel} from "./search-panel"
import {List} from "./list"
import {cleanObject} from 'utils/index'
const apiURL = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then(async (response) => {
            if (response.ok) {
                setList(await response.json());
            }
        });
        // fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then((response) => {
        //     return response.json()
        // }).then((res) => {
        //     setList(res)
        // }) 
    }, [param]);
    useEffect(() => {
        fetch(`${apiURL}/users`).then(async (response) => {
            if (response.ok) {
                setUsers(await response.json());
            }
        });
    }, [])
    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
            <List list={list} users={users}></List>
        </div>
    )
}