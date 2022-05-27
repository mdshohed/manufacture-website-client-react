import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]); 
  const [user] = useAuthState(auth); 
  const navigate = useNavigate(); 

  useEffect(()=>{
    const url = `http://localhost:5000/order/admin`; 
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
      setOrders(data);
    })
  },[orders, navigate])

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
  
  const handleAdminShipped = (id) =>{
    console.log(id);
    fetch(`http://localhost:5000/order/admin/${id}`,{
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify()

      }).then(res=>res.json())
      .then(data=>{
      })
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
              <th>Email</th>
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
                  <td>{a.email}</td>
                  <td>{a.address}</td>
                  <td>${a.price}</td>
                  <td>{a.quantity}</td>
                  <td>
                    {<>
                      {(a.price && !a.paid && !a.adminShipped) && <button className='btn btn-xs btn-success'>Unpaid</button>}
                      {(a.price && !a.paid && !a.adminShipped) && <button onClick={()=>handleOrderDelete(a._id)} className='btn btn-xs btn-error ml-3'>Cancel</button>}
                      {(a.price && a.paid && !a.adminShipped) && <button onClick={()=>handleAdminShipped(a._id)} className='btn btn-xs ml-3'>Pending</button> }
                      {(a.price && a.paid && a.adminShipped) && <span className='text-success'>Shipped</span>}
                    </>}
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;