import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
export default function AllToysTable({ index, toysport }) {
    const { _id, name, sellerName, subCategory, price, quantity } = toysport;
    const { user } = useContext(AuthContext);

    const handleClick = () => {
        if (user) {

        } else {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Please Login !!',
                showConfirmButton: false,
                timer: 1500
            })

        }
    };
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{sellerName || 'N/A'}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/ToysDetails/${_id}`}><button onClick={handleClick} className="btn btn-primary" >View Details</button></Link>
            </td>
        </tr>
    )
}
