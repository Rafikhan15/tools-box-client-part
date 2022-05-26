import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyHistory = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const navigateToProduct = () => {
        navigate('/');
    }

    const handleBooking = event => {
        event.preventDefault();

        const updateProfile = {

            buyerName: event.target.name.value
        }
        fetch(`https://cryptic-everglades-92183.herokuapp.com/booking/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProfile)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`successfully update Profile`)
                }
                else {
                    toast.error(`Already have update `)
                }

                // setShowproduct(null) ;
                // refetch();
            });


    }



    return (
        <div>
            <h2>This is My Order History</h2>

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-5">
                <form onSubmit={handleBooking}>
                    <div class="card-body">

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" value={user.email} class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" class="input input-bordered" />
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Update</button>
                        </div>

                    </div>


                </form>
                <div class="form-control mb-4">
                    <button onClick={() => navigateToProduct()} class="btn btn-primary">Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default MyHistory;