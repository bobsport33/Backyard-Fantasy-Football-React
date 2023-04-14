import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import { media } from "../../styles/variables";

const SingleCardCont = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 50px;
    color: var(--color-dark);

    @media ${media.tablet} {
        gap: 30px;
    }

    @media ${media.mobile} {
        gap: 20px;
    }

    .single-card__container {
        display: flex;
        flex-direction: row;
        gap: 50px;
        justify-content: space-evenly;

        @media ${media.tablet} {
            gap: 20px;
        }

        @media (max-width: 750px) {
            gap: 30px;
            flex-direction: column;
            align-items: center;
        }
    }

    .single-card__text-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 45%;
        justify-content: center;

        @media (max-width: 750px) {
            width: 100%;
        }
    }

    .single-card__heading {
        font-size: 4.2rem;
        line-height: 5rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;

        @media ${media.tablet} {
            font-size: 3.6rem;
            line-height: 4rem;
        }

        @media ${media.mobile} {
            font-size: 3rem;
        }
    }

    .single-card__description {
        font-size: 2.6rem;
        line-height: 3rem;

        @media ${media.tablet} {
            font-size: 2.2rem;
        }

        @media ${media.mobile} {
            font-size: 2rem;
            text-align: center;
        }
    }

    .single-card__image {
        width: 40%;
        min-width: 350px;
        border: 4px solid var(--color-gray);
        object-fit: cover;
        transition: all 0.2s;

        &:hover {
            transform: scale(1.1);

            @media ${media.tablet} {
                transform: scale(1);
            }
        }

        @media ${media.mobile} {
            min-width: unset;
            width: 100%;
        }
    }
`;

const SingleCard = () => {
    return (
        <Card>
            <SingleCardCont>
                <h2 className={"single-card__heading"}>
                    Why Fantasy Football Players Need to Embrace Data Analytics
                </h2>
                <div className="single-card__container">
                    <div className="single-card__text-container">
                        <p className="single-card__description">
                            Data analytics can give your fantasy football team
                            the edge you need to win. By identifying players
                            with upside and potential based on numbers, you can
                            make informed decisions and gain an advantage over
                            your opponents.
                        </p>
                        {/* <p className={"single-card__description"}>
                            What wins fantasy football championships? Grit?
                            Luck? Mind-games with your league opponents?
                            Unfortunately, most of these skills have no factor
                            on a players fantasy performance.
                        </p>
                        <p className={"single-card__description"}>
                            That is where data analytics comes into play. We
                            identify players that have more upside and potential
                            based off the numbers, and share those results with
                            you! With the advantages you gain from picking the
                            players with our analytics, your team will have the
                            edge you need to win!
                        </p> */}
                    </div>
                    <img
                        src="/assets/football-2.jpg"
                        alt="Pablo Sanchez"
                        className={"single-card__image"}
                    />
                </div>
            </SingleCardCont>
        </Card>
    );
};

export default SingleCard;
