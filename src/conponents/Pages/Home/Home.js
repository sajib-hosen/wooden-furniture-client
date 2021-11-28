import React from 'react';
import Banner from './Banner/Banner';
import CustomOrder from './CustomOrder/CustomOrder';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Products from './Products/Products';
import Rewiew from './Review/Rewiew';

const Home = () => {
    return (
        <div className="text-center">
            <Header/>
            <Banner/>
            <Products/>
            <Rewiew/>
            <CustomOrder/>
            <Footer/>
        </div>
    );
};

export default Home;