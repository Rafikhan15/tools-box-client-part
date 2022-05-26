import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductRow from '../Dashboard/ProductRow';
import Loading from '../Shared/Loading';

const AllProducts = () => {
    const [showproduct, setShowproduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://cryptic-everglades-92183.herokuapp.com/product', {
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


        </div >
    );
};

export default AllProducts;