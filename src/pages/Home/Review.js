import React from 'react';

const Review = ({review}) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="flex">
          <div class="avatar online placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span class="text-xl">JO</span>
            </div>
          </div> 
          <div className="">
            <h4 className='text-xl'>{review.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;