import React from 'react';
import review from '../../assets/images/review.jpg'

const AddReview = () => {
  
  const handleReview = event =>{
    event.preventDefault(); 
    const rating = event.target.rating.value; 
    const review = event.target.review.value; 
    console.log(rating, review); 
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
                  <textarea placeholder='Type Your Review...'  name="review"  className="input input-bordered w-full max-w-xs " ></textarea>
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