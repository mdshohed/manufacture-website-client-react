import React from 'react';
import contract from '../../assets/images/contract.jpg'

const Contract = () => {
  return (
    <div className='my-10'>
      <h3 className='text-3xl text-primary text-center m-5'>Contract With Us</h3>
      <div class="hero rounded">
        <div class="hero-content flex-col lg:flex-row">
          <img src={contract} alt='' class="max-w-sm rounded-lg" />
          <div>
            <form className='grid  gap-3  mt-2'>
              <input type="text" name='name' placeholder='Your Name' className="input input-bordered w-full max-w-xs" />
              <input type="email" name='email' placeholder='Your Email' className="input input-bordered w-full max-w-xs" />
              <textarea placeholder='Type Your message...'  name="comment"  className=" w-full  textarea textarea-bordered" ></textarea>
              <input type="submit" value="Submit" className="btn btn-secondary btn-sm" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;