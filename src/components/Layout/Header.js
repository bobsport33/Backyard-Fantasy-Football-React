import React from "react";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.navbar}>
                <a className={classes["nav-link"]} href="#">
                    Projections
                </a>
                <a className={classes["nav-link"]} href="#">
                    Rankings
                </a>

                <a className={classes["nav-link"]} href="#">
                    About
                </a>
                <a className={classes["nav-link"]} href="#">
                    Contact Us
                </a>
            </div>
        </header>
    );
};

export default Header;
