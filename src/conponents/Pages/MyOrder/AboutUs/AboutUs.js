import React from 'react';

const AboutUs = () => {
    return (
        <div className="text-center p-3 md:w-10/12 mx-auto">

            <h1 className="text-3xl border-b-2 border-indigo-600">About Us</h1>
            <div className="md:flex md:p-3">
                <img className="md:w-2/4" src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg" alt="our img" />
                <p className="md:p-8 md:px-16">
                    We "Wooden Furniture" are a small organization intended to work as an intermediary between Wooden Furniture Manufacturer and it's customer.
                    Our jab is to register the well known furniture Manufacturer to our organization and promote their product to sale. we also have a resposibility
                    to deliver the product safely to the customers home. <br/>
                    <button className="bg-yellow-700 m-4 px-4 rounded-full text-white">Learn More</button>
                </p>
            </div><br/><br/><br/>

            <h1 className="text-3xl border-b-2 border-indigo-600">Our Services</h1>
            <div className="md:flex p-3">
                <p className="md:p-8 md:px-16">
                    We "Wooden Furniture" are a small organization intended to work as an intermediary between Wooden Furniture Manufacturer and it's customer.
                    Our jab is to register the well known furniture Manufacturer to our organization and promote their product to sale. we also have a resposibility
                    to deliver the product safely to the customers home. <br/>
                    <button className="bg-yellow-700 m-4 px-4 rounded-full text-white">Learn More</button>
                </p>
                <img className="md:w-2/4" src="https://www.gulf-insider.com/wp-content/uploads/2020/08/Online-Shopping001.jpg" alt="our img" />
            </div>
            
        </div>
    );
};

export default AboutUs;