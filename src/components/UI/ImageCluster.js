import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImageCluster() {
    return (
        <div className="img_cluster">
            <img
                src="/assets/football-2.jpg"
                alt="Pablo Sanchez"
                className="cta__img cta__img-1"
            />
            <img
                src="/assets/pablo2.jpg"
                alt="Football"
                className="cta__img cta__img-2"
            />
            <img
                src="/assets/o-line-2.jpg"
                alt="Offensive Line"
                className="cta__img cta__img-3"
            />
        </div>
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
