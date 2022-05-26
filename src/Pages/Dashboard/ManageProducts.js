import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductBookingModal from '../Appointment/ProductBookingModal';

import Loading from '../Shared/Loading';

import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [showproduct, setShowproduct] = useState([]);

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    // 

    return (


        < div className='my-10' >
            <h4 className='text-xl text-secondary text-center my-12'>Available Product</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map((product, index) => <ProductRow
                        key={product._key}
                        product={product}
                        index={index}
                        refetch={refetch}
                        showproduct={showproduct}
                        setShowproduct={setShowproduct}
                    ></ProductRow>)
                }
            </div>
            <ProductBookingModal

                showproduct={showproduct}
                setShowproduct={setShowproduct}
                refetch={refetch}
            ></ProductBookingModal>


        </div >
    );
};

export default ManageProducts;