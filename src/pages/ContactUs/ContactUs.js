import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//  images ................................................................................................
import logo_comin_son from '../../images/green-technology.png';

const AboutUs = () => {
    return (
        <>
            <main id='main-posts' className='!bg-white'>
                <div className='hide-mobile'>
                    <h2 className='font-semibold mb-[1.5rem] text-[28px]'>Contact Us</h2>
                </div>

                <div>
                    <form>
                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <label className='text-[#525252] font-semibold' htmlFor='subject'>Subject</label>

                            <input id='subject' type='text' className='mt-[0.5rem] w-full h-[3rem] p-[1rem] bg-[#F5F5F5] rounded-[0.5rem] input-hover' />
                        </div>

                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <label className='text-[#525252] font-semibold' htmlFor='name'>Name</label>

                            <input id='name' type='text' className='mt-[0.5rem] w-full h-[3rem] p-[1rem] bg-[#F5F5F5] rounded-[0.5rem] input-hover' />
                        </div>

                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <label className='text-[#525252] font-semibold' htmlFor='email'>Email</label>

                            <input id='email' type='text' className='mt-[0.5rem] w-full h-[3rem] p-[1rem] bg-[#F5F5F5] rounded-[0.5rem] input-hover' />
                        </div>

                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <label className='text-[#525252] font-semibold' htmlFor='message'>Message</label>

                            <textarea id='message' type='text' className='mt-[0.5rem] w-full h-[15rem] p-[1rem] bg-[#F5F5F5] rounded-[0.5rem] input-hover'></textarea>
                        </div>

                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <button type='button' className='bg-black h-[3.5rem] text-white rounded-full font-semibold text-[18px]'>Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default AboutUs;