import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
// 
const stripePromise = loadStripe('pk_test_51L2DmNCzbSX2Akh8OYcuDMRyOfQ7p5oIEd7dnpRkBD9FNF27wOC2JGYtAqyZAc2yiEhEXRulc6PVVK7X9pZcogHg00OXasfjk0');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: booksProduct, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {booksProduct.buyerName}</p>
                    <h2 class="card-title">Please Pay for {booksProduct.product}</h2>
                    <p>Your booksProduct: <span className='text-orange-700'>{booksProduct.quantity}</span> at {booksProduct.slot}</p>
                    <p>Please pay: ${booksProduct.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booksProduct={booksProduct} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;