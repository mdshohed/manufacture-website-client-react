import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTools from '../../hooks/useTools';

const ManageTools = () => {
  const [tools, setTools] = useTools();
  console.log(tools);

  const handleToolsDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete this Product'); 
    if(proceed) {
      const url = `http://localhost:5000/tool/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{  
        const remaining = tools.filter(item=>item._id !== id);
        toast('Successfully deleted'); 
        setTools(remaining); 
      })
    }
  }
  return (
    <div>
      <div class="overflow-x-auto mx-3">
        <table class="table w-full">
          <thead >
            <tr >
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              tools.map((a, index)=>
                <tr>
                  <th>{index+1}</th>
                  <td><img src={a.img} style={{width:'50px'}} alt="" /></td>
                  <td>{a.name}</td>
                  <td>${a.price}</td>
                  <td>{a.quantity}</td>
                  <td>
                    {<button onClick={()=>handleToolsDelete(a._id)} class="btn btn-xs ml-2 btn-error">Delete</button>}
                  </td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTools;