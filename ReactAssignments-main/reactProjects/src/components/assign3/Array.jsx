import React, { useState } from 'react';

function Array() {
    const [numbers, setNumbers] = useState([20, 30, 40, 50]);

    function handleSetNumbersBeg() {
        setNumbers([10, ...numbers]);
    }

    function handleSetNumbersEnd() {
        setNumbers([...numbers, 60]);
    }

    function handleSetNumbersMiddle() {
        let copy = [...numbers];
        copy.splice(2, 0, 100); // Inserts 100 at index 2
        setNumbers(copy);
    }

    return (
        <div>
            <h2>Assignment 3</h2>
            {numbers.map((num, index) => (
                <p key={index}>{num}</p> // Using index as a key to avoid duplicate issues
            ))}
            <button className="btn btn-danger m-2" onClick={handleSetNumbersBeg}>
                Add to Beginning
            </button>
            <button className="btn btn-danger m-2" onClick={handleSetNumbersEnd}>
                Add to End
            </button>
            <button className="btn btn-danger m-2" onClick={handleSetNumbersMiddle}>
                Add to Middle
            </button>
        </div>
    );
}

export default Array;
