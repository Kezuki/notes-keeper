import React, { useContext } from "react";

import { Context } from "Application";
import Loading from "components/Loading";
import Notes from "components/Notes";

const NotesPage = () => {
    const { user } = useContext(Context);

    // main todo в Application
    const loading = user instanceof Object;

    console.log(user);

    const a = [
        {
            userId: "",
            usersCategories: [],
            listOfLinks: [
                {
                    link: "",
                    tags: [],
                    categories: [],
                },
            ],
        },
    ];

    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }

    return (
        <div className="content">
            {loading ? <Notes /> : <Loading center />}
        </div>
    );
};

export default NotesPage;
