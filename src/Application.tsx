import "./Application.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { privateRoutes, publicRoutes } from "./routes";

import { IntlProvider } from "react-intl";
import flatten from "flat";
// @ts-ignore  
import messages_en from "shared/locales/en.json";
// @ts-ignore  
import messages_ru from "shared/locales/ru.json";

export const Context = React.createContext<any>(null);

const Application = () => {
    // решает проблему мгновенного отображения начального экрана в момент когда пользователь авторизирован
    // todo нужно подумать как переделать эту схему (посмотеть в сторону Suspense)
    const startUserStatus = Boolean(localStorage.getItem("login"));

    const systemLanguage =
        localStorage.getItem("lang") || navigator.language.split(/[-_]/)[0];

    const [user, setUser] = useState<any>(startUserStatus);

    const [language, setLanguage] = useState(systemLanguage);

    const languageHandler = useCallback(
        (lang) => {
            setLanguage(lang);
            localStorage.setItem("lang", lang);
        },
        [setLanguage]

    );

    const messages = useMemo(
        () => ({
            ru: messages_ru,
            en: messages_en,
        }),
        []
    );

    useEffect(() => {

        onAuthStateChanged(getAuth(), (user) => {
            setUser(user);
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                const uid = user.uid;

                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [setUser]);


    return (
        <Context.Provider value={{ user: user, setLanguage: languageHandler }}>
            <IntlProvider
                locale={language}
                //@ts-ignore
                messages={flatten(messages[language])}
            >
                <BrowserRouter>
                    {user ? (
                        <Switch>
                            {privateRoutes.map(({ path, Component }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    component={Component}
                                    exact

                                />
                            ))}


                            <Redirect to="/notes" />
                        </Switch>
                    ) : (
                        <Switch>

                            {publicRoutes.map(({ path, Component }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    component={Component}
                                    exact

                                />
                            ))}

                            <Redirect to="/" />
                        </Switch>
                    )}
                </BrowserRouter>
            </IntlProvider>
        </Context.Provider>
    );
};

export default Application;
