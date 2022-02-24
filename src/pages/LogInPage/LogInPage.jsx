import React, { useState } from "react";
import Input from "primitives/Input";
import Button from "primitives/Button";
import Header from "components/Header";
import { FirebaseApiService } from "shared/api/firebaseApiService";

const LogInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e, callback) => {
        e.preventDefault();
        callback(e.target.value);
    };

    return (
        <>
            <Header></Header>
            <main className="container">
                <h1>LogIn</h1>
                <form className="form">
                    <Input
                        onChange={(e) => {
                            onChange(e, setEmail);
                        }}
                        value={email}
                        type="email"
                    />{" "}
                    <br />
                    <Input
                        onChange={(e) => {
                            onChange(e, setPassword);
                        }}
                        value={password}
                        type="password"
                    />
                    <Button
                        onClick={() => {
                            FirebaseApiService.loginWithEmail(email, password);
                        }}
                    >
                        LogIn
                    </Button>
                </form>
                <Button onClick={FirebaseApiService.loginWithGoogle}>
                    Google
                </Button>
            </main>
        </>
    );
};

export default LogInPage;
