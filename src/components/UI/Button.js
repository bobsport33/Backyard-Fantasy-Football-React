import React from "react";

export default function Button({ text, styles }) {
    return <button className={`btn ${styles}`}>{text}</button>;
}
