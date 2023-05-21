import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2'
export default function UpdateSports() {
    const sportz = useLoaderData();
    const { _id, price, quantity, description } = sportz;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
    
        const newToy ={ price, quantity, description};
    
        //send data to the server
        fetch(`http://localhost:2000/addToy/${_id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.modifiedCount>0){
            Swal.fire({
                title: 'success!',
                text: 'ToySportz Update successfully',
                icon: 'success',
                confirmButtonText: 'okay'
              })
        }

        })
    
      }

    return (
         <div>
            <div className="container my-5">
                <h2 className="text-center mb-5">Update My Toy</h2>
               <div className="card p-4 mx-auto" style={{ maxWidth: '500px' }}>
               <form onSubmit={handleUpdate}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                className="form-control"
                                defaultValue={price}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="quantity" className="form-label">
                                Available Quantity
                            </label>
                            <input
                                type="text"
                                name="quantity"
                                className="form-control"
                                defaultValue={quantity}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="description" className="form-label">
                                Detail Description
                            </label>
                            <textarea
                                name="description"
                                className="form-control"
                                rows="5"
                                defaultValue={description}
                                
                            ></textarea>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-primary btn-lg" type="submit">
                            Add Toy
                        </button>
                    </div>
                </form>
               </div>
            </div>
        </div>
    )
}
