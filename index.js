import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HookControlledButtonState from "./Counter";
import EmojiCounter from "./EmojiCounters";

ReactDOM.render(
    <React.StrictMode>
        <HookControlledButtonState />
        <EmojiCounter pic="Love" />
        <EmojiCounter pic="Sad" />
        <EmojiCounter pic="Like" />
    </React.StrictMode>,
    document.getElementById("root")
);
