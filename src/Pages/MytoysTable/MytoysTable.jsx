import React from 'react'
import { Link } from 'react-router-dom';

export default function MytoysTable({ index, item, handleDelete }) {
    console.log(item);
    const { _id, name, price, quantity, description } = item;

    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{name || 'N/A'}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td>
                <Link to={`updateSports/${_id}`}><button className="btn btn-primary ">Update</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-danger mx-4">Delete</button>
            </td>
        </tr>
    )
}
