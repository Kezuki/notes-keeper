import "./Loading.scss";

import React from "react";

const Loading = ({ center }: any) => {
    const addClass = center ? "loading_center" : "";

    return (
        <svg
            className={`loading ${addClass}`}
            width="50px"
            height="50px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#e15b64"
                strokeWidth="7"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                ></animateTransform>
            </circle>
        </svg>
    );
};

export default Loading;
