import React from "react";
import Button from "../UI/Button";
import ImageCluster from "../UI/ImageCluster";

export default function CTA() {
    return (
        <section className="cta">
            <h2 className="cta__heading">Why use Backyard Fantasy-Football?</h2>
            <div className="cta__description">
                <p className="cta__p">
                    What wins fantasy football championships? Grit? Luck?
                    Mind-games with your league opponents? As a fantasy manager
                    you probably wish you could just draft Pablo Sanchez from
                    the Backyard Football game with the first pick in your
                    league and automatically win championships.
                    <br />
                    <br />
                    Unfortunately, even the best fantasy football players do not
                    put up the numbers we saw from our favorite videogame
                    speedster. That is where data analytics comes into play. We
                    identify players that have more upside and potential based
                    off the numbers, and share those results with you! With the
                    advantages you gain from picking the players our analytics
                    pinpoint, your team will average enough points that you will
                    not have a need for a fictional superstar like Pablo.
                </p>
                <ImageCluster />
            </div>
            <Button text="7-Day Free Trial" styles="btn-cta" />
        </section>
    );
}
