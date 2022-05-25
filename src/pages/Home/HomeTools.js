import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from '../Tools/Tool';

const HomeTools = () => {
  const [tools] = useTools(); 
  console.log(tools);
  return (
    <div>
      <h3 className='text-2xl text-primary text-center m-10'>Available Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20">
        {
          tools.slice(0,6).map(tool=><Tool
          tools={tool}
          ></Tool>)
        }
      </div>
    </div>
  );
};

export default HomeTools;