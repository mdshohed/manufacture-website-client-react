import React from 'react';

const AddReview = () => {
  const handleReview = event =>{
    event.preventDefault(); 
    const rating = event.target.rating.value; 
    const review = event.target.review.value; 
    console.log(rating, review); 
  }
  
  return (
    <div className='mx-5'>
      <h2 className='text-2xl'>Clients Reviews</h2>
    </div>
  );
};

export default AddReview;