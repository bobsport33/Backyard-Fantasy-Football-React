import React from "react";
import styled from "styled-components";
import { media } from "../../styles/variables";

const HeroCont = styled.div`
    width: 100%;
    height: 300px;
    background-color: rgb(12, 52, 24);
    border: 20px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    .hero__heading {
        color: var(--color-navy);
        font-family: "Oswald", sans-serif;
        font-weight: 500;
        font-size: 9.5rem;
        -webkit-text-stroke: 1px #fff;
        margin-bottom: 20px;
        text-align: center;

        @media ${media.tablet} {
            font-size: 7rem;
        }

        @media ${media.mobile} {
            font-size: 4.5rem;
        }
    }
`;

export default function Hero() {
    return (
        <HeroCont>
            <h1 className={"hero__heading"}>Backyard Fantasy Football</h1>
        </HeroCont>
    );
}
