import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ToyTabs = () => {
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2000/addToy")
            .then((res) => res.json())
            .then((data) => setAllCategory(data));
    }, []);

    return (
        <div className="container">
            <Tabs>
            <h2 className=" text-center mb-4">
                Toy All Category
            </h2>
            <TabList className="d-flex justify-content-center mb-3 list-unstyled">
                <Tab>
                    <button className="btn btn-primary me-3">
                    Basketball toys
                    </button>
                </Tab>
                <Tab>
                    <button className="btn btn-primary me-3">
                    Cricket toys
                    </button>
                </Tab>
                <Tab>
                    <button className="btn btn-primary me-3">
                    soccer toys
                    </button>
                </Tab>
            </TabList>

            <TabPanel>
                <div className="row row-cols-1 row-cols-md-3 mx-auto mt-5 mb-5 gap-4">
                    {allCategory
                        .filter((category) => category.subCategory === "Basketball")
                        .map((item) => (
                            <div key={item._id} className="col ">
                                <div className="card bg-light h-100  shadow">
                                    <img src={item.pictureUrl} className="card-img-top w-75 mx-auto d-flex p-2" alt="baby dolls" />
                                    <div className="card-body">
                                        <h3 className="card-title">Name: {item.name}</h3>
                                        <p>Price: {item.price}</p>
                                        <p>Rating: {item.rating}</p>
                                        <div className="card-actions justify-content-end">
                                            <button className="btn btn-primary">View details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </TabPanel>
            <TabPanel>
                <div className="row row-cols-1 row-cols-md-3 mx-auto mt-5 mb-5 gap-4">
                    {allCategory
                        .filter((category) => category.subCategory === "Cricket toys")
                        .map((item) => (
                            <div key={item._id} className="col">
                                <div className="card bg-light h-100  shadow">
                                    <img src={item.pictureUrl} className="card-img-top w-75 mx-auto d-flex p-2" alt="Cricket toys" />
                                    <div className="card-body">
                                        <h3 className="card-title">Name: {item.name}</h3>
                                        <p>Price: {item.price}</p>
                                        <p>Rating: {item.rating}</p>
                                        <div className="card-actions justify-content-end">
                                            <button className="btn btn-primary">View details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </TabPanel>
            <TabPanel>
                <div className="row row-cols-1 row-cols-md-3 mx-auto mt-5 mb-5 gap-4">
                    {allCategory
                        .filter((category) => category.subCategory === "soccer toy")
                        .map((item) => (
                            <div key={item._id} className="col">
                                <div className="card h-100  bg-light shadow">
                                    <img src={item.pictureUrl} className="card-img-top w-75 mx-auto d-flex p-2" alt="soccer toy" />
                                    <div className="card-body">
                                        <h3 className="card-title">Name: {item.name}</h3>
                                        <p>Price: {item.price}</p>
                                        <p>Rating: {item.rating}</p>
                                        <div className="card-actions justify-content-end">
                                            <button className="btn btn-primary">View details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </TabPanel>

        </Tabs>
        </div>
    );
};

export default ToyTabs;