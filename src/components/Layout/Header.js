import React, { useState } from "react";
import styled, { css } from "styled-components";
import Menu from "../UI/Menu";
import { media } from "../../styles/variables";

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
        position: relative;
        z-index: 1;

        @media ${media.tablet} {
            justify-content: flex-end;
        }
    }

    .nav-link {
        text-decoration: none;
        font-size: 2.4rem;
        color: var(--color-light);

        @media ${media.tablet} {
            display: none;
        }
    }

    .nav__mobile-link {
        text-decoration: none;
        font-size: 2.4rem;
        color: var(--color-light);
    }

    .logo {
        width: 200px;
        margin-top: 15px;
    }

    .nav-modal {
        display: none;

        @media ${media.tablet} {
            display: block;
            height: fit-content;
            height: 215px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            background-color: rgba(13, 24, 17, 1);
            padding-top: 15px;
            transition: transform 0.5s;
            transform: translateY(-315px);
            position: relative;
            z-index: -1;
        }
        ${({ open }) => {
            console.log(open);
            if (open) {
                return css`
                    transform: translateY(0) !important; ;
                `;
            }
        }}
    }
`;
const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const clickHandler = () => {
        const curModal = modalOpen;
        setModalOpen(!curModal);
    };

    console.log(modalOpen);
    return (
        <HeaderCont open={modalOpen}>
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
                <Menu onClick={clickHandler} />
            </div>

            <div className="nav-modal">
                <a className={"nav__mobile-link"} href="/">
                    Projections
                </a>
                <a className={"nav__mobile-link"} href="/">
                    Rankings
                </a>

                <a className={"nav__mobile-link"} href="/">
                    About
                </a>
                <a className={"nav__mobile-link"} href="/">
                    Contact Us
                </a>
            </div>
        </HeaderCont>
    );
};

export default Header;
