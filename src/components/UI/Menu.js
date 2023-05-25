import React from "react";
import styled from "styled-components";
import { media } from "../../styles/variables";

export const MenuCont = styled.div`
    display: none;

    @media ${media.tablet} {
        display: flex;
    }

    &:hover {
        cursor: pointer;
    }

    align-items: center;
    justify-content: center;
    width: 49px;
    background-color: #1d0633;
    margin-right: 40px;

    .menu__hamburger {
        background-color: #5b8fb9;
        height: 3px;
        width: 25.5px;
        border-radius: 20px;
        position: relative;
        transition: transform 0.3s;

        &::before {
            background-color: #5b8fb9;
            content: "";
            display: inline-block;
            height: 3px;
            width: 25.5px;
            border-radius: 20px;
            position: absolute;
            top: -8px;
            transition: transform 0.3s;
        }
        &::after {
            background-color: #5b8fb9;
            content: "";
            display: inline-block;
            height: 3px;
            width: 25.5px;
            border-radius: 20px;
            position: absolute;
            top: 8px;
            transition: transform 0.3s;
        }
    }

    #menu-checkbox {
        display: none;

        &:checked {
            ~ .menu__label {
                .menu__hamburger {
                    background-color: #1d0633;
                    &::before {
                        transform: rotate(400deg) translateY(-2.5px);
                        width: 30px;
                        transform-origin: top left;
                    }

                    &::after {
                        transform: rotate(320deg) translateY(2.5px);
                        width: 30px;
                        transform-origin: top left;
                    }
                }
            }
        }
    }
`;

const Menu = ({ onClick }) => {
    return (
        <MenuCont>
            <input
                id="menu-checkbox"
                name="menu-checkbox"
                type="checkbox"
                onClick={onClick}
            />
            <label htmlFor="menu-checkbox" className="menu__label">
                <div className="menu__hamburger"></div>
            </label>
        </MenuCont>
    );
};

export default Menu;
