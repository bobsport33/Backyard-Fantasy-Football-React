import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import ImageCluster from "../UI/ImageCluster";

const SingleCardCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    color: var(--color-dark);

    .single-card__container {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    .single-card__text-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 55%;
    }

    .single-card__heading {
        font-size: 4.2rem;
        line-height: 5rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    }

    .single-card__description {
        font-size: 2.6rem;
        line-height: 3rem;
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
                    <ImageCluster />
                </div>
            </SingleCardCont>
        </Card>
    );
};

export default SingleCard;
