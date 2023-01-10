import React from "react";
import Button from "../UI/Button";

export default function Header() {
    return (
        <header className="header">
            <h1>Backyard Fantasy-Football</h1>
            <h3 className="header__heading3">
                Data to give your fantasy team the edge!
            </h3>
            <div className="header-btns">
                <Button text="Sign-up Now!" styles="btn-header" />
                <Button text="Log In" styles="btn-header" />
                {/* <buttton className="btn btn-header">Sign-up Now!</buttton>
                <buttton className="btn btn-header">Log In</buttton> */}
            </div>
        </header>
    );
}
