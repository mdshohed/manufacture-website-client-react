import React from 'react';
import CountUp from 'react-countup';

const Summary = () => {
  return (
    // style={{background: '#025b74'}}
    <div className='p-3' >
      <h3 className='text-2xl text-primary text-center mt-5'>WE REACHED</h3>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 mx-20">
        <div className="text-center m-3">
          <h4 className='text-2xl'><CountUp duration={2} end={72} />+</h4> 
          <h3 className='text-secondary'>Countries</h3>
        </div>
        <div className="text-center">
          <h4 className='text-2xl'><CountUp duration={2} end={23456} />+</h4> 
          <h3 className='text-secondary'>Complete Orders</h3>
        </div>
        <div className="text-center">
          <h4 className='text-2xl'><CountUp duration={2} end={1000} />+</h4> 
          <h3 className='text-secondary'>Happy Membership</h3>
        </div>
        <div className="text-center">
          <h4 className='text-2xl'><CountUp duration={2} end={500} />+</h4> 
          <h3 className='text-secondary'>Feedback</h3>
        </div>
      </div>

    </div>
  );
};

export default Summary;