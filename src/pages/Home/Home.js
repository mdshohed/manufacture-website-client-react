import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import HomeTools from './HomeTools';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <HomeTools></HomeTools>
      <Footer></Footer>
    </div>
  );
};

export default Home;