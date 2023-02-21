import React from "react";
import classes from "./Body.module.css";

const Body = ({ children }) => {
    return (
        <div className={classes.body}>
            {children}
            <div className={classes["hash-marks"]}></div>
        </div>
    );
};

export default Body;
