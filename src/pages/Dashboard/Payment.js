import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2b0xGxIFJC1OANbUH0gPXgCXdBnKy2SywsHmIvnOGkad1XXygdKhQ4NaDIPGBIVUQdqiHcnsbF535d9yWJli1x00Uaf0y01h');

const Payment = () => {
  const {id} = useParams(); 
  const url = `http://localhost:5000/order/${id}`;
   
  const {data: order, isLoading} = useQuery('orders', ()=>fetch(url,{
    method: 'GET', 
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res=>res.json())); 

  if(isLoading) {
    return <Loading></Loading>
  }
  
  return (
    <div className='mx-5'>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order.name}</p>
          <p class="card-title"><small>Please pay for <span className='text-secondary'>{order?.toolsName}</span></small></p>
          <p>Parts Quantity: {order.quantity}</p>
          <p className='text-red-500'>Payment Amount: ${order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
        <div class="card-body">
        <Elements stripe={stripePromise}>
          {/* <CheckoutForm 
            order={order}
          /> */}
        </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;