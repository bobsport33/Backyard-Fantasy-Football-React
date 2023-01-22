import React, { useEffect } from "react";
import { useState } from "react";

export default function LoadingSpinner() {
    const [spinnerTextIndex, setSpinnerTextIndex] = useState(0);

    const text = ["Downloading All Plays", "Watching Film", "Calculating Data"];

    useEffect(() => {
        setTimeout(() => {
            if (spinnerTextIndex < text.length) {
                let index = spinnerTextIndex;
                setSpinnerTextIndex(index + 1);
            } else {
                let index = 0;
                setSpinnerTextIndex(index);
            }
        }, 5000);
    }, [spinnerTextIndex, text.length]);

    return (
        <div className="spinner-container">
            <div className="spinner"></div>

            <p className="spinner-text">{text[spinnerTextIndex]}</p>
        </div>
    );
}
