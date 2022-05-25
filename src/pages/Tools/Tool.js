import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tools}) => {
  const navigate = useNavigate(); 
  const {_id, name, img, price, minQuantity, quantity} = tools; 

  const handlePurchase = id =>{
    const url = `tool/${id}`;
    navigate(url); 
  }
  return (
    <div>
      <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
        <figure><img src={img} style={{width:'150px'}} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className='text-xl text-red-500'>Price: ${price}</p>
          <p className=''>Minimum Quantity: <span className='text-red-700'>{minQuantity}</span></p>
          <p className=''>Available Quantity: {quantity}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm" onClick={()=>handlePurchase(_id)}>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;