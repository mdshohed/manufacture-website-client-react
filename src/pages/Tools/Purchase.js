import React, { useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToolDetails from '../../hooks/useToolDetails';

const Purchase = () => {
  const {id} = useParams(); 
  const [tool] = useToolDetails(id); 
  const {_id,name, img, price, minQuantity, quantity} = tool; 
  const [user, loading, error] = useAuthState(auth); 
  
  const handleOrders = (event) =>{
    event.preventDefault(); 
    const userQuantity = event.target.userQuantity.value; 
    if(parseInt(userQuantity)<parseInt(minQuantity)) {
      alert('please fill min-quantity')
    }
    
    const order = {
      toolsName: name,
      name: user?.displayName || '',
      email: user?.email || '',
      price, 
      quantity: userQuantity,
      address: event.target.address.value,
      phone: event.target.phone.value
    }
    fetch('http://localhost:5000/order',{
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.success){
        toast.success("Successfully order completed"); 
      }
      else {
        toast.success("Already another ordered");
      }
    })
    console.log(order);
  }

  return (
    <div className="">
      <h3 className='text-2xl text-center m-5'>Hello <span className='text-red-500'>{user?.displayName}</span>, Confirm your order</h3>
      <div class="hero">
        <div class="hero-content flex-col md:flex-row">
          <div className="text-center">
            <img src={img} style={{width:'250px'}} alt='' class="max-w-sm rounded-lg mx-auto" />
            <h3 className='text-xl mt-5 text-primary'>{name}</h3>
            <p className='text-primary'>Price: <span className='text-red-500'>${price}</span></p>
            <p className='text-primary'>Minimum Order Quantity: <span className='text-red-500'>{minQuantity}</span></p>
            <p><span className='text-primary'>Available Quantity:</span> {quantity}</p>
          </div>
          
          <div className='mx-20' >
            <form onSubmit={handleOrders} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
              <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
              <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
              <input type="text" name='address' placeholder='Address' className="input input-bordered w-full max-w-xs" />
              <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
              <input type="text" name='userQuantity' value={minQuantity} placeholder='Address' className="input input-bordered w-full max-w-xs" />
              <input type="submit" value="Confirm Order" placeholder="Type here" className="btn btn-secondary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;