import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ClientReview from './ClientReview';
import HomeTools from './HomeTools';
import Review from './Review';
import Summary from './Summary';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <HomeTools></HomeTools>
      <Summary></Summary>
      <ClientReview></ClientReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;