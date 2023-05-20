import React from 'react'
import './Mytoys.css'
import ToySportTitle from '../../TitleHooks/ToySportTitle'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useState } from 'react'
import { useEffect } from 'react'
import MytoysTable from '../MytoysTable/MytoysTable'
export default function Mytoys() {
  ToySportTitle("MyToys")
  const {user} = useContext(AuthContext)
  const[items, setItems] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:2000/mytoys?email=${user.email}`)
    .then((res)=>res.json())
    .then((data)=> setItems(data))
  },[user]);

  return (
    <div>
    <div className="container my-5">
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
            <MytoysTable key={item._id} index={index + 1} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
