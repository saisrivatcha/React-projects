import React from 'react'
import { useState } from 'react';

function Array() {
    let [Numbers, setNumbers] = useState([20, 30, 40, 50]);
    function handlesetNumbers_beg() {
        setNumbers([10, ...Numbers])

    }
    function handlesetNumbers_end() {
        setNumbers([...Numbers, 60]);
    }
    function handlesetNumbers_middle() {
        let copy = [...Numbers];
        copy.splice(2, 0, 100);
        setNumbers(copy);
    }
    return (
        <div>
          <h2>Assignment 3</h2>

            {
                Numbers.map(m => <p key={m}>{m}</p>)
            }
            <button className="btn btn-danger" onClick={handlesetNumbers_beg}>Change beg</button>
            <button className="btn btn-danger" onClick={handlesetNumbers_end}>Change end</button>
            <button className="btn btn-danger" onClick={handlesetNumbers_middle}>Change middle</button>
        </div>
    )
}

export default Array