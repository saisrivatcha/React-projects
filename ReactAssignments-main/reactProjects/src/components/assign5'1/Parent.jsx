import React from 'react'
import { useState } from 'react'
import Child from './Child'

function Parent() {
    let [counter,setCounter]=useState(0);

    function handleIncrement(){
        setCounter(counter+1);
    }

    function handleDecrement(){
        setCounter(counter-1);
    }
  return (
    <div className="bg-info mt-5 container w-100 p-5 rounded-3">
    <h1 className="display-3 text-center text-danger fw-semibold">Parent</h1>
    <p className="lead text-center fw-semibold fs-2 text-dark bg-warning w-25 mx-auto">
      Counter : {counter}
    </p>
    <Child
      counter={counter}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  </div>
  )
}

export default Parent