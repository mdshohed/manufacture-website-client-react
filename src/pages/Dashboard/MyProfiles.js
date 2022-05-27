import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfiles = () => {
  const [user] = useAuthState(auth);
  const [edit, setEdit] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const {name, address, education, phone, linkedIn} = userProfile;

  useEffect(()=>{
    const url = `https://damp-beach-74920.herokuapp.com/profile?email=${user.email}`; 
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setUserProfile(data);
    }); 
  },[userProfile]); 


  const handleSubmit =async event =>{
    event.preventDefault();

    const proceed = await window.confirm('Are you sure you want to change profile details');
    if(proceed){
      const profile = {
        name: event.target.name.value,
        email: user.email,
        address: event.target.address.value,
        education: event.target.education.value,
        phone: event.target.phone.value,
        linkedIn: event.target.linkedIn.value,
      }
      fetch('https://damp-beach-74920.herokuapp.com/profile', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(profile)
      })
      .then(res=>res.json())
      .then(data=>{
        setEdit(!edit); 
        setUserProfile(profile)
        toast.success('Successfully Profile Update'); 
      })
    }
  }


  return (
    <div className='mt-5 mr-10'>
      <div className="flex justify-between border bg-base-200">
        <h3 className='text-xl font-bold p-2'>My Profiles</h3> 
        <button onClick={()=>setEdit(!edit)} className='btn btn-primary btn-sm m-2'>{edit ? "Edit Profile": "See Profile"}</button>
      </div>
      <div className="bg-red-100 border"></div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">K</span>
            </div>
          </div> 
          {
            edit ? <>
              <div>
                <div className="my-1">
                  <small>Full Name</small>
                  <h3 className=" font-bold">{name==='' || name===null? user.displayName : name}</h3>
                </div>
                <div className="my-1">
                  <small>Email Address</small>
                  <h3 className=" font-bold">{user?.email}</h3>
                </div>
                <div className="my-1">
                  <small>Address</small>
                  <h3 className=" font-bold">{address}</h3>
                </div>
                <div className="my-1">
                  <small>Education</small>
                  <h3 className=" font-bold">{education}</h3>
                </div>
                <div className="my-1">
                  <small>Phone</small>
                  <h3 className=" font-bold">{phone}</h3>
                </div>
                <div className="my-1">
                  <small>LinkedIn</small>
                  <h3 className=" font-bold"><Link as={Link} to="" className='link link-primary'>{linkedIn}</Link></h3>
                </div>
              </div>
            </> 
            : <>
              <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center'>
                <div className="form-control">
                  <label className="label">
                    <small className="label-text">Full Name</small>
                  </label>
                    <input type="text" name='name' value={user.displayName} placeholder="" className="input input-sm input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <small className="label-text">Email</small>
                  </label>
                    <input type="text" name='email' value={user.email} placeholder="" className="input input-sm input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <small className="label-text">Address</small>
                  </label>
                    <input type="text" name='address' placeholder="Address" className="input input-sm input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <small className="label-text">Education</small>
                  </label>
                    <input type="text" name='education' placeholder="Education" className="input input-sm input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <small className="label-text">Phone</small>
                  </label>
                    <input type="text" name='phone' placeholder="Phone" className="input input-sm input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <small className="label-text">LinkedIn</small>
                  </label>
                    <input type="text" name='linkedIn'  placeholder="LinkedIn link" className="input input-sm input-bordered w-full" />
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