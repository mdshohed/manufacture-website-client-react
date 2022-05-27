import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
  const {data: users, isLoading, refetch} = useQuery('users', ()=>fetch('https://damp-beach-74920.herokuapp.com/user',{
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
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Admin Status</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user,index)=><AdminRow
            key={user._id}
            index={index}
            user={user}
            refetch={refetch}
            ></AdminRow>)
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;