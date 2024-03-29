import React from "react";

import Header from "./components/Layout/Header";

import Hero from "./components/Layout/Hero";

import Body from "./components/Layout/Body";
import TargetShare from "./components/Layout/TargetShare";
import Footer from "./components/Layout/Footer";
import SingleCard from "./components/Layout/SingleCard";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Body>
                <SingleCard />
                <TargetShare />
            </Body>
            <Footer />
        </React.Fragment>
    );
}

export default App;
