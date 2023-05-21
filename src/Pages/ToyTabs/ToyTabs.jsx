import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabviewDetails from '../TabviewDetails/TabviewDetails'

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
                <h2 className="text-center mb-4">Toy All Category</h2>
                <TabList className="d-flex justify-content-center mb-3 list-unstyled">
                    <Tab>
                        <button className="btn btn-primary me-3">Basketball toys</button>
                    </Tab>
                    <Tab>
                        <button className="btn btn-primary me-3">Cricket toys</button>
                    </Tab>
                    <Tab>
                        <button className="btn btn-primary me-3">Soccer toys</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <TabviewDetails
                        allCategory={allCategory}
                        subCategory="Basketball"
                        altText="Basketball toys"
                    />
                </TabPanel>
                <TabPanel>
                    <TabviewDetails
                        allCategory={allCategory}
                        subCategory="Cricket toys"
                        altText="Cricket toys"
                    />
                </TabPanel>
                <TabPanel>
                    <TabviewDetails
                        allCategory={allCategory}
                        subCategory="Soccer toy"
                        altText="Soccer toys"
                    />
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ToyTabs;
