import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfiles = () => {
  const [user] = useAuthState(auth);
  const [edit, setEdit] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const {name, email, address, education, phone, linkedIn} = userProfile;

  useEffect(()=>{
    const url = `http://localhost:5000/profile?email=${user.email}`; 
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data); 
      setUserProfile(data)
    }); 
  },[userProfile]); 


  const handleSubmit =async event =>{
    event.preventDefault();

    const proceed = await window.confirm('Are you sure you want to change profile details');
    if(proceed){
      const profile = {
        name: event.target.address.value,
        email: user.email,
        address: event.target.address.value,
        education: event.target.education.value,
        phone: event.target.phone.value,
        linkedIn: event.target.linkedIn.value,
      }
      fetch('http://localhost:5000/profile', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(profile)
      })
      .then(res=>res.json())
      .then(data=>{
        setEdit(!edit); 
        toast.success('Successfully Profile Update'); 
      })
    }
  }

  return (
    <div className='mt-5 mr-10'>
      <div className="flex justify-between border bg-base-200">
        <h3 className='text-xl font-bold p-2'>My Profiles</h3> 
        <button onClick={()=>setEdit(!edit)} className='btn btn-primary btn-sm'>{edit ? "Edit Profile": "See Profile"}</button>
      </div>
      <div className="bg-red-100 border"></div>
      <div class="hero bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span class="text-3xl">K</span>
            </div>
          </div> 
          {
            edit ? <>
              <div>
                <div className="my-1">
                  <small>Full Name</small>
                  <h3 class=" font-bold">{name}</h3>
                </div>
                <div className="my-1">
                  <small>Email Address</small>
                  <h3 class=" font-bold">{email}</h3>
                </div>
                <div className="my-1">
                  <small>Address</small>
                  <h3 class=" font-bold">{address}</h3>
                </div>
                <div className="my-1">
                  <small>Education</small>
                  <h3 class=" font-bold">{education}</h3>
                </div>
                <div className="my-1">
                  <small>Phone</small>
                  <h3 class=" font-bold">{phone}</h3>
                </div>
                <div className="my-1">
                  <small>LinkedIn</small>
                  <h3 class=" font-bold"><Link as={Link} to="" className='link link-primary'>{linkedIn}</Link></h3>
                </div>
              </div>
            </> 
            : <>
              <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center'>
                <div class="form-control">
                  <label class="label">
                    <small class="label-text">Full Name</small>
                  </label>
                    <input type="text" name='name' value={user.displayName} placeholder="" class="input input-sm input-bordered w-full" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <small class="label-text">Email</small>
                  </label>
                    <input type="text" name='email' value={user.email} placeholder="" class="input input-sm input-bordered w-full" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <small class="label-text">Address</small>
                  </label>
                    <input type="text" name='address' placeholder="Address" class="input input-sm input-bordered w-full" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <small class="label-text">Education</small>
                  </label>
                    <input type="text" name='education' placeholder="Education" class="input input-sm input-bordered w-full" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <small class="label-text">Phone</small>
                  </label>
                    <input type="text" name='phone' placeholder="Phone" class="input input-sm input-bordered w-full" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <small class="label-text">LinkedIn</small>
                  </label>
                    <input type="text" name='linkedIn'  placeholder="LinkedIn link" class="input input-sm input-bordered w-full" />
                </div>
                <input type="submit" value="Save Changes" className='btn btn-secondary btn-sm mt-3'/>
              </form>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfiles;