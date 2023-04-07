import React from "react";
import styled from "styled-components";

const InfoCardCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 325px;
    background-color: rgba(24, 27, 33, 0.7);

    position: relative;
    overflow: hidden;

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
    }

    .info-card__title {
        font-size: 6rem;
        line-height: 6rem;
        padding: 60px 0;
    }

    .info-card__bottom {
        bottom: -100%;
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.5s;
    }

    .info-card__description {
        font-size: 2.4rem;
        line-height: 2.6rem;
        padding: 0 20px;
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
