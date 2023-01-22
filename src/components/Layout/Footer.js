import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <ul className="footer_list">
                <button className="footer_list__item" href="#">
                    Home
                </button>
                <button className="footer_list__item" href="#">
                    About Us
                </button>
                <button className="footer_list__item" href="#">
                    Contact Us
                </button>
                <button className="footer_list__item" href="#">
                    Log In
                </button>
            </ul>

            <div className="social">
                <ion-icon
                    className="social_icons"
                    name="logo-facebook"
                ></ion-icon>
                <ion-icon
                    className="social_icons"
                    name="logo-instagram"
                ></ion-icon>
                <ion-icon
                    className="social_icons"
                    name="logo-twitter"
                ></ion-icon>
                <ion-icon
                    className="social_icons"
                    name="logo-youtube"
                ></ion-icon>
            </div>

            <p className="copyright">
                ©Copyright Backyard Fantasy-Football {year}
            </p>
        </footer>
    );
}
