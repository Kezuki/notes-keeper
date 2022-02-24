import React, { useMemo } from "react";

import Flex from "primitives/Flex";
import Header from "components/Header";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import peacful from "lotties/peacful.json";

const HomePage = () => {
    const lottieOptions = useMemo(() => {
        return {
            loop: true,
            autoplay: true,
            animationData: peacful,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            },
        };
    }, []);


    return (
        <>
            <Header></Header>
            <main className="container">
                <Flex flexDirection="column" alignItems="center">
                    <Lottie options={lottieOptions} height={600} width={600} />
                    <h1 style={{ textAlign: "center" }}>asdasd</h1>

                    <Link style={{ textAlign: "center" }} to="/signup">
                        Create new account
                    </Link>
                </Flex>
            </main>
        </>
    );
};

export default HomePage;
