import React from 'react';

const Tool = ({tools}) => {
  const { name, img, price, minQuantity, quantity} = tools; 
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
            <button class="btn btn-primary btn-sm">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;