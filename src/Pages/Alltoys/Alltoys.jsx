import React from 'react'
import './Alltoys.css'
import ToySportTitle from '../../TitleHooks/ToySportTitle'
import { useLoaderData } from 'react-router'
import AllToysTable from '../AllToysTable/AllToysTable'
import { useState } from 'react'
export default function Alltoys() {
  ToySportTitle("Alltoys")
  const toysports = useLoaderData()

  const [limit, setLimit] = useState(20);
  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 20);
  };
  return (
    <div>

      <div className="container my-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Seller</th>
              <th scope="col">Toy Name</th>
              <th scope="col">Sub-category</th>
              <th scope="col">Price</th>
              <th scope="col">Available Quantity</th>
              <th scope="col" >View Details</th>
            </tr>
          </thead>
          <tbody>
            {
              toysports.slice(0, limit).map((toysport, index) => <AllToysTable key={toysport._id} index={index + 1} toysport={toysport}></AllToysTable>)
            }
          </tbody>
        </table>
        {limit < toysports.length && (
          <button className="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>



    </div>
  )
}
