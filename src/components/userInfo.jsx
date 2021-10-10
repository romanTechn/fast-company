import React, { useState } from "react";
import API from "../API";
import { useHistory } from "react-router";
import { useEffect } from "react";
import QualitiesList from "./qualitiesList";

const UserInfo = ({ userId }) => {
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    });

    const handleAllUsers = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button onClick={handleAllUsers}>Все пользователи</button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

export default UserInfo;
