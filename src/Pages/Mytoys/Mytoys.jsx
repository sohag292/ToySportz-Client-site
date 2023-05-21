import React from 'react'
import './Mytoys.css'
import Swal from 'sweetalert2'
import ToySportTitle from '../../TitleHooks/ToySportTitle'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useState } from 'react'
import { useEffect } from 'react'
import MytoysTable from '../MytoysTable/MytoysTable'
export default function Mytoys() {
  ToySportTitle("MyToys")
  const { user } = useContext(AuthContext)
  const [items, setItems] = useState([])
  const [selectedOption,setSelectedOption] = useState('asen');
  useEffect(() => {
    fetch(`http://localhost:2000/addToy?email=${user.email}&sort=${selectedOption}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [user,selectedOption]);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:2000/addToy/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remeaining = items.filter(dlt => dlt._id !== _id)
              setItems(remeaining)
            }
          })
      }
    })
  }


  return (
    <div>
      <div className="container my-5">
      <div className="flex items-center space-x-2 mb-5 mt-5">
        <label htmlFor="sort" className="text-gray-500">
          Sort By:
        </label>
        <select name="sort" id="sort" className="rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-20" onChange={(e)=> setSelectedOption(e.target.value)}>
          <option value={'asen'}>Price (Low to High)</option>
          <option value={'dese'}>Price (High to Low)</option>
        </select>
      </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <MytoysTable key={item._id} handleDelete={handleDelete} index={index + 1} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
