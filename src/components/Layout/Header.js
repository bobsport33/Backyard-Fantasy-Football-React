import React from "react";
import styled from "styled-components";

const HeaderCont = styled.header`
    height: 100px;
    z-index: 100;
    position: relative;
    background-color: rgba(13, 24, 17, 1);

    .navbar {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .nav-link {
        text-decoration: none;
        font-size: 2.4rem;
        color: var(--color-light);
    }

    .logo {
        width: 200px;
        margin-top: 15px;
    }
`;
const Header = () => {
    return (
        <HeaderCont>
            <div className={"navbar"}>
                <a className={"nav-link"} href="/">
                    Projections
                </a>
                <a className={"nav-link"} href="/">
                    Rankings
                </a>

                <a className={"nav-link"} href="/">
                    About
                </a>
                <a className={"nav-link"} href="/">
                    Contact Us
                </a>
            </div>
        </HeaderCont>
    );
};

export default Header;
