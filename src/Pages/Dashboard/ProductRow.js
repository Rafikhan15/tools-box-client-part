import { id } from 'date-fns/locale';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch, setDeletingProduct, setShowproduct, showproduct }) => {
    const { name, price, quantity, description, img, email } = product;
    const navigate = useNavigate();



    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
            <figure><img className='w-25' src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>description: {description}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <div class="card-actions justify-center">


                    {/*  <Link to={`/product/${id}`}>
                        <button class="btn btn-primary">Buy Now</button>
                    </Link> */}

                    <label
                        htmlFor="booking-modal"

                        onClick={() => setShowproduct(product)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Now</label>
                </div>
            </div>
        </div>


    );
};

export default ProductRow;