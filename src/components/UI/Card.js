import React from "react";
import styled from "styled-components";

const CardCont = styled.div`
    width: 90%;
    margin: auto;
    padding: 40px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

const Card = ({ children }) => {
    return <CardCont>{children}</CardCont>;
};

export default Card;
