import React, { useReducer, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToolDetails from '../../hooks/useToolDetails';

const Purchase = () => {
  const {id} = useParams(); 
  const [tool, setTool] = useToolDetails(id); 
  const {_id, name, img, price, minQuantity, quantity} = tool; 
  const [user] = useAuthState(auth); 
  const [confirmButton, setConfirmButton] = useState(false); 
  
  const handleOrders = async(event) =>{
    event.preventDefault(); 
    const userQuantity = await event.target.userQuantity.value; 
    if(parseInt(userQuantity)>parseInt(quantity)) {
      alert('Not available much quantity, Please Choose in limit')
    }
    
    else {
      const proceed = await window.confirm('Are you sure, you want to buy this parts'); 
      if( proceed){
        const order = {
          toolsName: name,
          productId: _id,
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
          if(data.success){
            toast.success("Successfully order completed"); 
            
            const newParts = {
              _id,
              name,
              quantity: parseInt(quantity) - parseInt(userQuantity),
              img,
              minQuantity, 
              price
            }
            setTool(newParts); 
  
          }
          else {
            toast.success("Already another ordered");
          }
        })
      }
      
    }
  }

  const handleQuantity = event =>{
    const userQuantity = document.getElementById('quantity').value;
    if(parseInt(userQuantity)<parseInt(minQuantity) || userQuantity==='') {
      setConfirmButton(true);
    }
    else setConfirmButton(false);
  }


  return (
    <div className="">
      <h3 className='text-2xl text-center m-5'>Hello <span className='text-red-500'>{user?.displayName}</span>, Confirm your order</h3>
      <div class="hero">
        <div class="hero-content flex-col md:flex-row">
          <div className="">
            <img src={img} style={{width:'200px'}} alt='' class="max-w-sm rounded-lg mx-auto" />
            <div class="card ">
              <div class="card-body">
                <h3 className='text-xl '>{name}</h3>
                <p >Price: <span className='text-red-500'>${price}</span></p>
                <p>Minimum Order Quantity: <span className='text-red-500'>{minQuantity}</span></p>
                <p>Available Quantity: {quantity}</p>
              </div>
            </div>
          </div>
          
          <div className='mx-20' >
            <form onSubmit={handleOrders} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
              <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full " required/>
              <input type="text" name='email'  disabled value={user?.email || ''} className="input input-bordered w-full " required/>
              <input type="text" name='address' placeholder='Address' className="input input-bordered w-full " required/>
              <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " required/>
              {/* <input type="text" name='userQuantity' value={} placeholder='Address' className="input input-bordered w-full" /> */}
              <div class="form-control mb-3 ">
                <label class="input-group">
                  <span>Quantity</span>
                  <input id='quantity' type="text" onBlur={handleQuantity} name='userQuantity' defaultValue={minQuantity} placeholder="Quantity"  class="input input-bordered w-full" required/>
                </label>
              </div>
              <input type="submit" disabled={confirmButton?true:false} value="Confirm Order" placeholder="Type here" className="btn btn-secondary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

// disabled={confirmButton?true:true}