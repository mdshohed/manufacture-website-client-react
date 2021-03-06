import React from 'react';

const Review = ({review}) => {

  
  return (
    <div className="card lg:max-w-lg bg-base-500  shadow-xl">
      <div className="card-body">
        <div className="flex justify-center">
          <div className="avatar placeholder mr-3">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12 border">
              <span className="text-xl">{review.name.slice(0,3)}</span>
            </div>
          </div> 
          <div className="">
            <h4 className='text-xl'>{review.name}</h4>
            <h3>Rating: {review.rating}</h3>
          </div>
        </div>
        <p className='text-center'>{review.review}</p>
      </div>
    </div>
  );
};

export default Review;