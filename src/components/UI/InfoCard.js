import React from "react";
import styled from "styled-components";
import { media } from "../../styles/variables";

const InfoCardCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 325px;
    background-color: rgba(24, 27, 33, 0.7);
    position: relative;
    overflow: hidden;

    @media ${media.tablet} {
        width: 100%;
        align-items: center;
        padding: 15px;
        gap: 20px;
        max-width: 600px;
    }

    @media ${media.mobile} {
        min-width: unset;
    }

    &:nth-of-type(1) {
        border: 4px solid var(--color-green);
    }
    &:nth-of-type(2) {
        border: 4px solid var(--color-blue);
    }
    &:nth-of-type(3) {
        border: 4px solid var(--color-red);
    }

    &:hover {
        cursor: pointer;

        .info-card__top,
        .info-card__bottom {
            transform: translateY(-100%);
        }
    }

    .info-card__top {
        height: 100%;
        transition: transform 0.5s;
        display: flex;
        align-items: center;
    }

    .info-card__title {
        font-size: 6rem;
        line-height: 6rem;
        padding: 60px 0;

        @media ${media.tablet} {
            padding: 0;
            font-size: 4rem;
            line-height: 4rem;
        }

        @media ${media.mobile} {
            font-size: 3rem;
            line-height: 3rem;
        }
    }

    .info-card__bottom {
        bottom: -100%;
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.5s;

        @media ${media.tablet} {
            position: relative;
        }
    }

    .info-card__description {
        font-size: 2.4rem;
        line-height: 2.6rem;
        padding: 0 20px;

        @media ${media.tablet} {
            font-size: 2rem;
            line-height: 2.2rem;
        }

        @media ${media.mobile} {
            font-size: 1.8rem;
        }
    }
`;

const InfoCard = (props) => {
    return (
        <InfoCardCont>
            <div className="info-card__top">
                <h4 className="info-card__title">{props.title}</h4>
            </div>
            <div className="info-card__bottom">
                <p className="info-card__description">{props.description}</p>
            </div>
        </InfoCardCont>
    );
};

export default InfoCard;
