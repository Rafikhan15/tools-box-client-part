import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pds = ({ AllPd }) => {
    const { _id, name, img, description, price, quantity } = AllPd;
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
            <figure><img className='w-25' src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>description: {description}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <div class="card-actions justify-center">



                    <button onClick={() => navigateToProductDetail(_id)} className='btn btn-success'>Buy: {name}</button>
                </div>
            </div>
        </div>


    );
};

export default Pds;