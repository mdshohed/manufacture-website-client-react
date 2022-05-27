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
      <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
        <figure><img src={img} style={{width:'150px'}} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className='text-xl text-red-500'>Price: ${price}</p>
          <p className=''>Minimum Quantity: <span className='text-red-700'>{minQuantity}</span></p>
          <p className=''>Available Quantity: {quantity}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm" onClick={()=>handlePurchase(_id)}>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;