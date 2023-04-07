import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const ClusterCont = styled.div`
    position: relative;
    height: 100%;
    width: 50%;

    .cta__img {
        position: absolute;
        height: auto;
        width: 45%;
        border: 4px solid var(--color-gray);
        transition: all 0.2s;
    }
    .cta__img:hover {
        transform: scale(1.1);
        z-index: 20;
    }

    .cta__img:nth-child(1) {
        z-index: 8;

        transform: translateY(50%);
    }
    .cta__img:nth-child(2) {
        z-index: 10;
        top: 0rem;
        transform: translateX(45%);
    }

    .cta__img:nth-child(3) {
        z-index: 7;
        transform: translateY(75%) translateX(115%);
    }
`;

export default function ImageCluster() {
    return (
        <ClusterCont>
            <img
                src="/assets/football-2.jpg"
                alt="Pablo Sanchez"
                className={"cta__img cta__img-1"}
            />
            <img
                src="/assets/pablo2.jpg"
                alt="Football"
                className={"cta__img cta__img-2"}
            />
            <img
                src="/assets/o-line-2.jpg"
                alt="Offensive Line"
                className={"cta__img cta__img-3"}
            />
        </ClusterCont>
    );
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".cta__img-1", {
    scrollTrigger: {
        trigger: ".cta__img-1",
        onEnter: () => {
            const img1 = document.querySelector(".cta__img-1");

            img1.classList.add("fade-in-left");
        },
    },
});

gsap.to(".cta__img-2", {
    scrollTrigger: {
        trigger: ".cta__img-2",
        onEnter: () => {
            const img1 = document.querySelector(".cta__img-2");

            img1.classList.add("fade-in-down");
        },
    },
});
gsap.to(".cta__img-3", {
    scrollTrigger: {
        trigger: ".cta__img-3",
        onEnter: () => {
            const img1 = document.querySelector(".cta__img-3");

            img1.classList.add("fade-in-right");
        },
    },
});
