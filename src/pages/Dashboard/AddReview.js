import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import review from '../../assets/images/review.jpg'
import auth from '../../firebase.init';

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth); 
  
  const handleReview = event =>{
    event.preventDefault(); 
    const rating = event.target.rating.value; 
    const comment = event.target.comment.value; 

    const review = {
      name: user?.displayName || '',
      rating: rating,
      review: comment
    }
    
    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.success){
        toast.success('Successfully completed Review')
      }
      else {
        toast.error('Some error in your Review'); 
      }
    })

 
    event.target.reset();
  }

  return (
    <div className='mx-5'>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col md:flex-row">
          <img src={review} alt='' class="max-w-sm rounded-lg" />
          <div>
            <div class="card w-96 bg-base-100 mx-auto">
              <div class="card-body">
                <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                  <input type="number" name='rating' placeholder='Rating value' className="input input-bordered w-full max-w-xs" />
                  <textarea placeholder='Type Your Review...'  name="comment"  className="input input-bordered w-full max-w-xs " ></textarea>
                  <input type="submit" value="Submit" className="btn btn-secondary btn-sm" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;