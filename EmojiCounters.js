import React, { useState, useEffect } from "react";
import Love from "./Love.png"; // Add this file in src
import Sad from "./Sad.png"; // Add this file in src
import Like from "./Like.png"; // Add this file in src

function EmojiCounter(props) {
    const [pic, setPic] = useState(Love);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (props.pic === "Love") setPic(Love);
        else if (props.pic === "Sad") setPic(Sad);
        else if (props.pic === "Like") setPic(Like);
    }, [props.pic]);

    const ClickHandle = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>{props.pic}</p>
            <button onClick={ClickHandle}>
                {count} <img src={pic} alt={props.pic} />
            </button>
        </div>
    );
}

export default EmojiCounter;
