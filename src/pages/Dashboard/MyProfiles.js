import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfiles = () => {
  const [user, loading] = useAuthState(auth);
  const [edit, setEdit] = useState(false); 

  

  return (
    <div className='mt-5 mr-10'>
      <div className="flex justify-between border bg-base-200">
        <h3 className='text-xl font-bold p-2'>My Profiles</h3> 
        <button className='btn btn-primary btn-sm'>Edit Profile</button>
      </div>
      <div className="bg-red-100 border"></div>
      <div class="hero  bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span class="text-3xl">K</span>
            </div>
          </div> 
          <div>
            <div className="my-1">
              <small>Full Name</small>
              <h3 class=" font-bold">{user.displayName}</h3>
            </div>
            <div className="my-1">
              <small>Email Address</small>
              <h3 class=" font-bold">{user.email}</h3>
            </div>
            <div className="my-1">
              <small>Education</small>
              <h3 class=" font-bold">{user.email}</h3>
            </div>
            <div className="my-1">
              <small>location</small>
              <h3 class=" font-bold">{user.email}</h3>
            </div>
            <div className="my-1">
              <small>Phone</small>
              <h3 class=" font-bold">{user.displayName}</h3>
            </div>
            <div className="my-1">
              <small>LinkedIn</small>
              <h3 class=" font-bold"><Link as={Link} to="" className='text-secondary'>{user.email}</Link></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfiles;