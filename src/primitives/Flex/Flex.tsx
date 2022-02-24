import React from "react";

interface Props {
    justifyContent?: any;
    alignItems?: any;
    flexWrap?: any;
    flexDirection?: any;
    children?: any;

}


const Flex = ({ justifyContent, alignItems, flexWrap, flexDirection, children }: Props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent,
                alignItems,
                flexWrap,
                flexDirection,
            }}
        >
            {children}
        </div>
    );
}


export default Flex;
