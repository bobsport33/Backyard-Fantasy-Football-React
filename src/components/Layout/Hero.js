import React from "react";
import Button from "../UI/Button";

import classes from "./Hero.module.css";

export default function Header() {
    return (
        <div className={classes.hero}>
            <h1 className={classes.hero__heading}>Backyard Fantasy Football</h1>
        </div>
    );
}
