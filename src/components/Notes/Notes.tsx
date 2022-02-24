import React, { useState, useEffect, useContext } from "react";
import Aside from "components/Aside";
import { FirebaseApiService } from "shared/api/firebaseApiService";
import "./Notes.scss";
import { Context } from "Application";

const Notes = () => {
    const { user } = useContext(Context);

    const [data, setData] = useState();

    useEffect(() => {
        FirebaseApiService.getData("users", user.uid, setData);
    }, []);

    return (
        <>
            <Aside />
            <main></main>
        </>
    );
};

export default Notes;
