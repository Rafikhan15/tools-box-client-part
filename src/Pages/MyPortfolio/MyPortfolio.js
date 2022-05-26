import React from 'react';

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/Js91cKw/ZC-0825.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to My Portfolio!</h1>
                    <p className='py-5 font-bold justify-center'>Personal Info!</p>
                    <h3 className="py-2">Md. Rafi Khan</h3>
                    <h3 className="py-2">Bsc in CSE at City University, Bangladesh</h3>
                    <h3 className="py-2">Extracurricular Activities Course: Programming Hero Full Stack Web Development </h3>
                    <h3 className="py-2">Email : mdrafi.khan0089@gmail.com</h3>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;