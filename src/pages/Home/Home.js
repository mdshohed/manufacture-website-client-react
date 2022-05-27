import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ClientReview from './ClientReview';
import Contract from './Contract';
import Delivery from './Delivery';
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
      <Delivery/>
      <Contract/>
      <Footer></Footer>
    </div>
  );
};

export default Home;