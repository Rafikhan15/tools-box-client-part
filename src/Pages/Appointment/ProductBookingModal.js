import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ProductBookingModal = ({ showproduct, setShowproduct, refetch }) => {
    const { _id, name, price, quantity } = showproduct;
    const [user, loading, error] = useAuthState(auth);
    console.log(_id);

    const handleBooking = event => {
        event.preventDefault();


        const booking = {
            productId: _id,
            product: name,
            price,
            buyer: user.email,
            buyerName: user.displayName,
            quantity: event.target.quantity.value

        }

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

                // setShowproduct(null) ;
                refetch();
            });
    }
    //    
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Buy for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered w-full max-w-xs" />
                        {/* <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" /> */}

                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductBookingModal;