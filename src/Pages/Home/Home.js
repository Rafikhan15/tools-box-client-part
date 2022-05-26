import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Info from './Info';
import AllPds from '../Shared/AllPds';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllPds></AllPds>
            <BusinessSummary></BusinessSummary>
            <Info></Info>
            <Footer></Footer>
        </div>
    );
};

export default Home;