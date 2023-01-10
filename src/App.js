import React from "react";

import Header from "./components/Layout/Header";
import CTA from "./components/Layout/CTA";
import TargetShare from "./components/Layout/TargetShare";
import Footer from "./components/Layout/Footer";

function App() {
    return (
        <React.Fragment>
            <Header />
            <CTA />
            <TargetShare />
            <Footer />
        </React.Fragment>
    );
}

export default App;
