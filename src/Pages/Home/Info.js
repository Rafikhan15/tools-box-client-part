import React from 'react';
import InfoCard from './InfoCard';
import customerService from '../../assets/icons/customer-service-svgrepo-com.svg';
import quality from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div>
            <h3 className='text-primary text-center text-xl font-bold uppercase'>Reviews</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>

                <InfoCard cardTitle="Customer Service" bgClass="bg-gradient-to-r from-secondary to-primary" img={customerService}></InfoCard>
                <InfoCard cardTitle="Worrenty Service" bgClass="bg-neutral" img={quality}></InfoCard>
                <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>


            </div>

        </div>
    );
};

export default Info;