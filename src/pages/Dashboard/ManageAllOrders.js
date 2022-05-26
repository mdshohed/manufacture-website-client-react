import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
  const {data: orders, isLoading, refetch} = useQuery('orders', ()=>fetch(`http://localhost:5000/order`,{
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res=>res.json()));
  
  if(isLoading) {
    return <Loading></Loading>
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
                  <td>${a.price}</td>
                  <td>{a.quantity}</td>
                  <td>
                    {<>
                      {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                      {/* {<button onClick={()=>handleOrderDelete(a._id)} class="btn btn-xs ml-2 btn-error">Cancel</button>} */}
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

export default ManageAllOrders;