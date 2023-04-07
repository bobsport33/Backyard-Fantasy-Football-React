import React from "react";
import Lottie from "lottie-react";
import animationData from "./lf20_tbrwjiv5.json";
import styled from "styled-components";

const SpinnerCont = styled.div`
    height: 250px;
    width: 250px;
`;

const FootballSpinner = () => (
    <SpinnerCont>
        <Lottie animationData={animationData} loop={true} autoplay={true} />
    </SpinnerCont>
);

export default FootballSpinner;
