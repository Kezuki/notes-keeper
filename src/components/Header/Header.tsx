import "./Header.scss";

import React, { useContext } from "react";

import { Context } from "Application";
import { FirebaseApiService } from "shared/api/firebaseApiService";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Header = () => {
    const { user } = useContext(Context);
    const { setLanguage } = useContext(Context);

    //const displayName = user.displayName;
    //const email = user.email;
    //const photoURL = user.photoURL;
    //const emailVerified = user.emailVerified;

    return (
        <header className="header">
            <div className="header__container container">
                <Link to="/">
                    <div className="header__logo">
                        <img src="img/logo.svg" alt="logo" />
                    </div>
                </Link>

                <div>
                    <span
                        onClick={() => {
                            setLanguage("en");
                        }}
                    >
                        en &nbsp;
                    </span>
                    <span
                        onClick={() => {
                            setLanguage("ru");
                        }}
                    >
                        ru
                    </span>
                </div>

                {!user ? (
                    <Link to="/login">
                        <FormattedMessage id="header.login" />
                    </Link>
                ) : (
                    <div onClick={FirebaseApiService.singOut}>Sign out</div>
                )}
            </div>
        </header>
    );
};

export default Header;
