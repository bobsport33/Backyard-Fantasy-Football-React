import React from "react";
import Card from "../UI/Card";
import classes from "./SingleCard.modules.css";

const SingleCard = () => {
    return (
        <Card className={classes['single-card']}>
            <h2 className={classes['single-card__heading']}>Why choose Backyard Fantasy Football?</h2>
            <p className={classes['single-card__description']}>
                What wins fantasy football championships? Grit? Luck? Mind-games
                with your league opponents? As a fantasy manager you probably
                wish you could just draft Pablo Sanchez from the Backyard
                Football game with the first pick in your league and
                automatically win championships.
            </p>
            <p className={classes['single-card__description']}>
                Unfortunately, even the best fantasy football players do not put
                up the numbers we saw from our favorite videogame speedster.
                That is where data analytics comes into play. We identify
                players that have more upside and potential based off the
                numbers, and share those results with you! With the advantages
                you gain from picking the players our analytics pinpoint, your
                team will average enough points that you will not have a need
                for a fictional superstar like Pablo.
            </p>
        </Card>
    );
};

export default SingleCard;
