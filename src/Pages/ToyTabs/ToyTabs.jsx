import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function ToyTabs() {
    return (
        <div>
            <div className="container my-5">
                <Tabs>
                    <TabList className="d-flex justify-content-center mb-3">
                        <Tab>
                            <button className="btn btn-primary me-1">Ball Sports</button>
                        </Tab>
                        <Tab>
                            <button className="btn btn-primary me-1">Building Blocks</button>
                        </Tab>
                        <Tab>
                            <button className="btn btn-primary me-1">Board Games</button>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="row row-cols-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src="toy-image-url" className="card-img-top" alt="Toy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Toy Name</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Price: $10</h6>
                                        <p className="card-text">Rating: 4.5</p>
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                            {/* Add more toys for the Ball Sports category */}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {/* Add toys for the Building Blocks category */}
                    </TabPanel>
                    <TabPanel>
                        {/* Add toys for the Board Games category */}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
