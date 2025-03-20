import React from 'react'

function Product(props) {
  console.log("props");
  return (
    <div className="container ">
    <div className='card text-center p-4 align-items-center'>
        <img src={props.prodObj.image} width="180px" height="200px" alt="" />

   <div className='card-body'>
   <p>{props.prodObj.id}</p>
   <p>{props.prodObj.title}</p>
   <p>{props.prodObj.price}</p>
   </div>
   </div>
   </div>
  )
}

export default Product