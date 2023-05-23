import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import AllToysTable from "../AllToysTable/AllToysTable";

const AllToys = () => {
  const toysports = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [Items, setItems] = useState([]);
  // const [limit, setLimit] = useState(20);

  // const handleLoadMore = () => {
  //   setLimit(prevLimit => prevLimit + 20);
  // };

  const handleSearch = () => {
    if (searchText) {
      fetch(`http://localhost:2000/jobSearchName/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          // setLimit(20);
        })
        .catch((error) => console.log(error));
    }
    setSearchText("")

  };

  const searchResults = Items.length > 0 ? Items : toysports;

  return (
    <div>
      <div className="container my-5">
        <div className="d-flex justify-content-center">
          <div className="input-group w-25 mb-3">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              className="form-control"
              value={searchText}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Seller</th>
              <th scope="col">Toy Name</th>
              <th scope="col">Sub-category</th>
              <th scope="col">Price</th>
              <th scope="col">Available Quantity</th>
              <th scope="col">View Details</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((toysport, index) => (
              <AllToysTable
                key={toysport._id}
                index={index + 1}
                toysport={toysport}
              />
            ))}
          </tbody>
        </table>
        {/* {limit < searchResults.length && (
          <button className="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        )} */}
      </div>
    </div>
  );
};

export default AllToys;
