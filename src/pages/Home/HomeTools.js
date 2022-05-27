import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTools from '../../hooks/useTools';
import Tool from '../Tools/Tool';

const HomeTools = () => {
  const [tools] = useTools(); 
  const navigate = useNavigate(); 

  const handleParts = () =>{
    navigate('/tools');   
  }

  return (
    <div >
      <h3 className='text-3xl text-primary text-center m-10'>Available Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20">
        {
          tools.slice(0,6).map(tool=><Tool
          tools={tool}
          ></Tool>)
        }
        
      </div>
        
        <div className=" flex justify-center my-10">
          <Link to="/tools" className='btn btn-sm btn-secondary '>See All Parts</Link>
        </div>

    </div>
  );
};

export default HomeTools;