import React from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../userInfo";
import UsersList from "../usersList";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserInfo userId={userId} /> : <UsersList />}</>;
};

export default Users;
