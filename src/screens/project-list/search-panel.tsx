import React from "react";
export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    organizition: string;
    token: string;
}

interface SearchPaneProps {
    users: User[];
    param: {
        name: string;
        personId: string;
    };
    setParam: (param: SearchPaneProps["param"]) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPaneProps) => {
    return (
        <form action="">
            <input
                type="text"
                value={param.name}
                onChange={(evt) =>
                    setParam({ ...param, name: evt.target.value })
                }
            />
            <select
                name=""
                id=""
                value={param.personId}
                onChange={(evt) =>
                    setParam({ ...param, personId: evt.target.value })
                }
            >
                <option value="">负责人</option>
                {users.map((user) => (
                    <option value={user.id} key={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </form>
    );
};
