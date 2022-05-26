import React from 'react';
import people from '../../assets/images/people.png';
import revenue from '../../assets/images/revenue.png';
import toolBox from '../../assets/images/tool-box.png';
import Service from './Service';

const BusinessSummary = () => {
    const services = [
        {
            _id: 1,
            name: 'Served 100+ Customers',
            description: 'Our Served 100+ Customers are Active Now',
            img: people
        },
        {
            _id: 2,
            name: '120M+ Annual Revenue',
            description: 'Last Year Our Annual Revenue Increasing 50%',
            img: revenue
        },
        {
            _id: 3,
            name: '250K+ tools',
            description: 'We Have Collected Maney Lastest Tools ',
            img: toolBox
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Business Summary</h3>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default BusinessSummary;