import React from "react";
import Button from "../UI/Button";
import ImageCluster from "../UI/ImageCluster";
import classes from "./CTA.module.css";

export default function CTA() {
    return (
        <section className={classes.cta}>
            <h2 className={classes.cta__heading}>
                Why use Backyard Fantasy-Football?
            </h2>

            <ImageCluster />

            <Button text="7-Day Free Trial" styles={classes.btnCta} />
        </section>
    );
}
