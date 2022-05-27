import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const ClientReview = () => {
  const url = `https://damp-beach-74920.herokuapp.com/review`;
  const {data: reviews, isLoading} = useQuery('reviews', ()=>fetch(url,{
    method: 'GET', 
    // headers: {
    //   'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    // }
  }).then(res=>res.json()));

  if(isLoading) {
    return <Loading></Loading>
  }

  return (
    <section className='mx-20 my-10'>
      <h2 className='text-3xl text-primary text-center my-4'>Our Clients Review</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          reviews.map(review=><Review
          key={review._id}
          review={review}
          ></Review>)
        }
      </div>
    </section>
  );
};

export default ClientReview;