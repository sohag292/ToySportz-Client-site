import React from 'react'

export default function MytoysTable({index,item}) {
    console.log(item);
    const {name,price,quantity,description} = item;
  return (
    <tr>
    <th scope="row">{index}</th>
    <td>{name || 'N/A'}</td>
    <td>{price}</td>
    <td>{quantity}</td>
    <td>{description}</td>
    <td>
        <button className="btn btn-primary ">Update</button>
        <button className="btn btn-danger mx-4">Delete</button>
      </td>
  </tr>
  )
}
