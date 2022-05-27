import { useEffect, useState } from 'react';

const useToolDetails = (id) => {
  const [tool, setTool] = useState({}); 
  useEffect(()=>{
    const url = `https://damp-beach-74920.herokuapp.com/tool/${id}`; 
    fetch(url)
    .then(res=>res.json())
    .then(data=>setTool(data)); 
  },[id])
  return [tool, setTool]; 
};

export default useToolDetails;