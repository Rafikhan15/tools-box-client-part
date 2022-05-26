import React, { useEffect, useState } from 'react';
import Pds from './Pds';

const AllPds = () => {
    const [AllPds, setAllPds] = useState([]);
    const [Refresh, setRefresh] = React.useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setAllPds(data));
        setRefresh(!Refresh);
    }, [])

    return (
        <div id="services" className='container my-10'>
            <div className="row">
                <h1 className='text-primary text-center text-xl font-bold uppercase my-5'> Products </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        AllPds.map(AllPd => <Pds
                            key={AllPd._id}
                            AllPd={AllPd}
                        >
                        </Pds>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPds;