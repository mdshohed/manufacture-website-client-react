import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]); 
  const [user] = useAuthState(auth); 
  const navigate = useNavigate(); 

  useEffect(()=>{
    const url = `http://localhost:5000/order?email=${user.email}`; 
    fetch(url,{
      method: 'GET', 
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>{
      if( res.status===401 || res.status===403) {
        signOut(auth);
        localStorage.removeItem('accessToken'); 
        navigate('/'); 
      }
      return res.json()
    })
    .then(data=>{
      console.log(data); 
      setOrders(data);
    })
  },[])

  const handleOrderDelete = async(id) =>{
    const proceed = window.confirm('Are you sure you want to delete this Product'); 
    if(proceed) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{  
        const remaining =  orders.filter(item=>item._id !== id);
        setOrders(remaining); 
        toast('Successfully deleted'); 
      })
    }  
  }
  
  return (
    <div>
      {/* <h2>My Appointments: {appointments.length}</h2> */}
      <div class="overflow-x-auto mx-3">
        <table class="table w-full">
          <thead >
            <tr >
              <th></th>
              <th>parts Name</th>
              <th>Address</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((a, index)=>
                <tr>
                  <th>{index+1}</th>
                  <td>{a.toolsName}</td>
                  <td>{a.address}</td>
                  <td>{a.price}</td>
                  <td>{a.quantity}</td>
                  <td>
                    {<>
                      {<button onClick={()=>handleOrderDelete(a._id)} class="btn btn-xs mr-2 btn-error">Cancel</button>}
                      {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                    </>}
                  </td>
                  {/* <td>
                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                    {(a.price && a.paid) && <span className='text-success'>Paid</span>}
                  </td> */}
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;