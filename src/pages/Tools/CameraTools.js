import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../hooks/useTools';
import Tool from './Tool';

const CameraTools = () => {
  const [tools] = useTools();

  return (
    <div>
      <h3 className='text-3xl text-primary text-center m-10'>Available Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20">
        {
          tools.map(tool=><Tool
          tools={tool}
          ></Tool>)
        }
      </div>
    </div>
  );
};

export default CameraTools;