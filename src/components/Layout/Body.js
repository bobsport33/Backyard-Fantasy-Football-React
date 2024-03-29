import React from "react";
import styled from "styled-components";

const BodyCont = styled.div`
    position: relative;
    background: rgb(12, 52, 24);
    background: linear-gradient(
        90deg,
        rgba(12, 52, 24, 1) 0%,
        rgba(13, 24, 17, 1) 50%,
        rgba(12, 52, 24, 1) 100%
    );
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding-top: 100px;

    .hash-marks {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 310px;
        opacity: 0.1;
        background-image: url("data:image/svg+xml,%3Csvg width='310' height='470' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='90' width='150' height='20' fill='white' /%3E%3Crect x='0' y='180' width='150' height='20' fill='white' /%3E%3Crect x='0' y='270' width='150' height='20' fill='white' /%3E%3Crect x='0' y='360' width='150' height='20' fill='white' /%3E%3Crect x='0' y='450' width='300' height='20' fill='white' /%3E%3C/svg%3E");
    }
`;

const Body = ({ children }) => {
    return (
        <BodyCont>
            {children}
            <div className={"hash-marks"}></div>
        </BodyCont>
    );
};

export default Body;
