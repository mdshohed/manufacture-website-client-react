import React from 'react';
import delivery from '../../assets/images/delivery.jpg'

const Delivery = () => {
  return (
    <div className="mx-40">
      <h3 className='text-3xl text-primary text-center m-5'>Delivery</h3>
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={delivery} alt='' class="max-w-sm rounded-lg" />
          <div className='w-full'>
            <h1 class="text-5xl font-bold">Delivery News!</h1>
            <p class="py-6">Soon Our Company will start Home delivery for our client. Your can easily get all products form home. only you need to order product form our website...</p>
            <button class="btn btn-secondary btn-sm">See News</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;