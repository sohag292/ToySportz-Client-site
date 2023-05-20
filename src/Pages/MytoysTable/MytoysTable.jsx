import React from 'react'

export default function MytoysTable({index,item,handleDelete}) {
    console.log(item);
    const {_id, name,price,quantity,description} = item;
    
  return (
    <tr>
    <th scope="row">{index}</th>
    <td>{name || 'N/A'}</td>
    <td>{price}</td>
    <td>{quantity}</td>
    <td>{description}</td>
    <td>
        <button className="btn btn-primary ">Update</button>
        <button onClick={() => handleDelete(_id)} className="btn btn-danger mx-4">Delete</button>
      </td>
  </tr>
  )
}
