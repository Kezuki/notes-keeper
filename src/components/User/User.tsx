import React, { useContext } from "react";
import { Context } from "Application";
import { FirebaseApiService } from "shared/api/firebaseApiService";
import { VscSignOut as SignOut } from "react-icons/vsc";
import "./User.scss";

const User = () => {
    const { user } = useContext(Context);
    return (
        <>
            <div className="user">{user.displayName}</div>{" "}
            <SignOut size="20px" onClick={FirebaseApiService.singOut} />
        </>
    );
};

export default User;
