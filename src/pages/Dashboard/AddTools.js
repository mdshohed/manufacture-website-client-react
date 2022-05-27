import React from 'react';
import { toast } from 'react-toastify';

const AddTools = () => {

  const handleTools = event =>{
    event.preventDefault(); 
    const name = event.target.name.value; 
    const img = event.target.img.value;  

    const product = {
     name: event.target.name.value,
     img: event.target.img.value,
     price: event.target.price.value,
     minQuantity: event.target.minQuantity.value,
     quantity: event.target.quantity.value,
    }
    fetch('https://damp-beach-74920.herokuapp.com/tool', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success){
        toast.success('Successfully completed Review')
      }
      else {
        toast.error('Some error in your Review'); 
      }
    })

 
    event.target.reset();
  }

  return (
    <div className="">
      <h3 className='text-2xl text-center m-5'>Add Product</h3>
      <div className="hero">
        <div className="hero-content flex-col md:flex-row">
          <div className='card-body' >
            <form onSubmit={handleTools} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
              <input type="text" name='name' placeholder='Product Name' className="input input-bordered w-full " required/>
              <input type="text" name='img' placeholder="Image Link" className="input input-bordered w-full " required/>
              <input type="text" name='price' placeholder='Price' className="input input-bordered w-full " required/>
              <input type="text" name='quantity' placeholder='Quantity' className="input input-bordered w-full " required/>
              <input type="text" name='minQuantity' defaultValue="5" placeholder="Minimum Quantity" className="input input-bordered w-full " required/>
              <input type="submit" value="Add Product"  placeholder="Type here" className="btn btn-secondary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTools;