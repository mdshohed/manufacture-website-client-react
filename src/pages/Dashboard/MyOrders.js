import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ConfirmModel from '../Shared/ConfirmModel';

const MyOrders = () => {
  const [orders, setOrders] = useState([]); 
  const [user] = useAuthState(auth); 
  const navigate = useNavigate(); 
  const [openModel, setOpenModel] = useState(false);


  useEffect(()=>{
    const url = `https://damp-beach-74920.herokuapp.com/order?email=${user.email}`; 
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
  },[])

  const handleOrderDelete = async(id) =>{ 
    const proceed = window.confirm('Are you sure you want to delete this Product'); 
    if(proceed) {
      const url = `https://damp-beach-74920.herokuapp.com/order/${id}`;
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
      <div className="overflow-x-auto mx-3">
        <table className="table w-full">
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
                  <td>${a.price}</td>
                  <td>{a.quantity}</td>
                  <td>
                    {<>
                      {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                      {(a.price && !a.paid) && <button onClick={()=>handleOrderDelete(a._id)} className="btn btn-xs ml-2 btn-error">Cancel</button>}
                      {(a.price && a.paid) && <span className='text-success'>Paid</span>}
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

export default MyOrders;