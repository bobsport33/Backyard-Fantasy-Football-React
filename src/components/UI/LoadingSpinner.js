// import React, { useEffect } from "react";
// import { useState } from "react";

// export default function LoadingSpinner() {
//     const [spinnerTextIndex, setSpinnerTextIndex] = useState(0);

//     const text = ["Downloading All Plays", "Watching Film", "Calculating Data"];

//     useEffect(() => {
//         setTimeout(() => {
//             if (spinnerTextIndex < text.length) {
//                 let index = spinnerTextIndex;
//                 setSpinnerTextIndex(index + 1);
//             } else {
//                 let index = 0;
//                 setSpinnerTextIndex(index);
//             }
//         }, 5000);
//     }, [spinnerTextIndex, text.length]);

//     return (
//         <div className="spinner-container">
//             <div className="spinner"></div>

//             <p className="spinner-text">{text[spinnerTextIndex]}</p>
//         </div>
//     );
// }

// import React from "react";
// // import "./Spinner.css";

// const Spinner = () => (
//     <div className="spinner">
//         <div className="bounce1" />
//         <div className="bounce2" />
//         <div className="bounce3" />
//     </div>
// );

// export default Spinner;

// import React from "react";
// // import "./FootballSpinner.css";

// const FootballSpinner = () => (
//     <div className="football-spinner">
//         <div />
//     </div>
// );

// export default FootballSpinner;

import React from "react";
// import "./FootballSpinner.css";

const FootballSpinner = () => (
    <div className="football-spinner">
        <div className="football-oval">
            <div className="football-lace football-lace-left" />
            <div className="football-lace football-lace-right" />
        </div>
    </div>
);

export default FootballSpinner;
