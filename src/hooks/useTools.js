import React, { useEffect, useState } from 'react';

const useTools = () => {
  const [tools, setTools] = useState([]); 
  useEffect(()=>{
    const url = 'tools.json'; 
    fetch(url)
    .then(res=>res.json())
    .then(data=>setTools(data)); 
  },[])

  return [tools]; 
};

export default useTools;