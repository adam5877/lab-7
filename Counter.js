import React, { useState } from 'react';

function HookControlledButtonState() {
    // State to keep track of clicks
    const [count, setCount] = useState(0);

    // Increment the counter
    const ClickHandle = () => {
        setCount(count + 1);
    };

    return (
        <div className="App-header">
            <h1>Click Counts: {count}</h1>
            <button type="button" onClick={ClickHandle}>
                Click me {count}
            </button>
        </div>
    );
}

export default HookControlledButtonState;
