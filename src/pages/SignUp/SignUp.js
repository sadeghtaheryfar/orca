import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import orca_logo from './../../images/orca-logo.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//  images ................................................................................................
import logo_comin_son from '../../images/green-technology.png';

const SignUp = () => {
    return (
        <>
            <main id='main-posts' className='!bg-white flex justify-center !items-center flex-col main-signup'>
                <div className='w-[10rem] mb-[0.8rem]'>
                    <Link to='/' className='lg:block'>
                        <img src={orca_logo} />
                    </Link>
                </div>

                <div>
                    <h2 className='text-2xl font-semibold'>Comming Soon</h2>
                </div>

                <div className='mt-[0.5rem]'>
                    <p>Stay tuned for an exciting journey ahead.</p>
                </div>
            </main>
        </>
    );  
};

export default SignUp;