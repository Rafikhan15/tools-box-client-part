import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePdDetail from '../../hooks/usePdDetail';
import axios from 'axios';
import Loading from './Loading';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const PdsDetail = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const navigateToProduct = () => {
        navigate('/');
    }
    // const [user, loading, error] = useAuthState(auth);

    const { id } = useParams();
    const url = `https://cryptic-everglades-92183.herokuapp.com/product/${id}`;

    const { data: product, isLoading } = useQuery(['product', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(product);

    const { _id, name, description, price, quantity, email, img } = product;




    const handleBooking = event => {
        event.preventDefault();
        // const slot = event.target.slot.value;

        /* const booking = {
            productId: id,
            product: name,

            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            price: event.target.price.value
        } */

        const booking = {
            productId: _id,
            product: name,
            price,
            buyer: user.email,
            buyerName: user.displayName,
            quantity: event.target.quantity.value

        }
        console.log(booking);

        fetch('https://cryptic-everglades-92183.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Booked complete`)
                }
                else {
                    toast.error(`Already have booked `)
                }

                // setShowproduct(null);
                // refetch();
            });
    }



    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left mx-10">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-5">
                    <form onSubmit={handleBooking}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Product Id</span>
                                </label>
                                <input type="text" placeholder="Product" value={_id} class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Product</span>
                                </label>
                                <input type="text" placeholder="Product" value={name} class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="price" value={price} class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Quantity" class="input input-bordered" />
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Booking</button>
                            </div>

                        </div>


                    </form>
                    <div class="form-control mb-4">
                        <button onClick={() => navigateToProduct()} class="btn btn-primary">Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PdsDetail;