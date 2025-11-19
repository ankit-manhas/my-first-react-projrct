import React from 'react';
import { useState } from 'react';

const Footer = () => {
    const [count, setCount] = useState(0);
    const [countNew, setNewCount] = useState(10);

    return (
        <div>
            <h1>Counter:{count}</h1>
            <h1>Counter:{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                plus
            </button>
            <button onClick={() => setCount(count - 1)}>
                minus
            </button>
            <button onClick={() => setNewCount(countNew - 1)}>
                minus
            </button>
        </div>
    );
}

export default Footer;
