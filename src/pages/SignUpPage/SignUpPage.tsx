import React, { useState } from "react";

import Button from "primitives/Button";
import { FirebaseApiService } from "shared/api/firebaseApiService";
import Header from "components/Header";
import Input from "primitives/Input";

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e: any, callback: any) => {
        e.preventDefault();
        callback(e.target.value);
    };

    return (
        <>
            <Header></Header>
            <main className="container">
                <h1>SignUp</h1>
                <form className="form">
                    <Input
                        onChange={(e: any) => {
                            onChange(e, setEmail);
                        }}
                        value={email}
                        type="email"
                    />{" "}
                    <br />
                    <Input
                        onChange={(e: any) => {
                            onChange(e, setPassword);
                        }}
                        value={password}
                        type="password"
                    />
                    <Button
                        onClick={() => {
                            FirebaseApiService.signUpWithEmail(email, password);
                        }}
                    >
                        SignUp
                    </Button>
                </form>
                <Button onClick={FirebaseApiService.loginWithGoogle}>
                    Google
                </Button>
            </main>
        </>
    );
};

export default SignUpPage;
