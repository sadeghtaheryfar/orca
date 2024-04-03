import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import orca_logo from './../images/orca-logo.png';

const HeaderPost = () => {
    return (
        <>
            <header id='header-post' className='hide-pc flex-col'>
                <div className='h-[50px]'>
                    <Link to='/'>
                        <img className='h-full' src={orca_logo} />
                    </Link>
                </div>
            </header>
        </>
    );
};

export default HeaderPost;