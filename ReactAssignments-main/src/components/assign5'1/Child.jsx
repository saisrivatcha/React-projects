import React from 'react'

function Child(props) {
  return (
    <div className="bg-secondary mt-3 p-5 rounded-3">
      <h2 className="display-4 text-center text-light fw-semibold">Child</h2>
      <div className="d-flex mt-4 justify-content-center gap-4 fs-5">
        <button className="btn btn-primary" onClick={props.handleIncrement}>
          Increment
        </button>
        <button className="btn btn-primary" onClick={props.handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Child
