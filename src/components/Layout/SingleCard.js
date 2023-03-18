import React from "react";
import Card from "../UI/Card";
import classes from "./SingleCard.module.css";

const SingleCard = () => {
    return (
        <Card className={classes["single-card"]}>
            <h2 className={classes["single-card__heading"]}>
                Why Choose Backyard Fantasy Football?
            </h2>
            <p className={classes.description}>
                What wins fantasy football championships? Grit? Luck? Mind-games
                with your league opponents? Unfortunately, most of these skills
                have no factor on a players fantasy performance.
            </p>
            <p className={classes.description}>
                That is where data analytics comes into play. We identify
                players that have more upside and potential based off the
                numbers, and share those results with you! With the advantages
                you gain from picking the players with our analytics, your team
                will have the edge you need to win!
            </p>
        </Card>
    );
};

export default SingleCard;
