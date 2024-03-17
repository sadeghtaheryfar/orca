import React from 'react';
import amazonelogo from './../../images/amazonelogo.png';
import banner from './../../images/banner.png';
import { Link } from 'react-router-dom';

const GreenBusinessessShow = () => {
    return (
        <>
            <main id='main-posts' className='!bg-white'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-[7rem]'  src={amazonelogo} />
                    </div>

                    <div>
                        <div className='text-[20px] font-semibold'>
                            <h2>Business Name</h2>
                        </div>

                        <div className='text-[#525252]'>
                            <p>Detail</p>
                        </div>
                    </div>
                </div>

                <div className='content my-[1rem] text-justify'>
                    <p>The once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distanceThe once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distanceThe once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distanceThe once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distanceThe once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distanceThe once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distanceThe once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distance</p>

                    <img src={banner} />
                </div>

                <div>
                    <Link className='bg-[#F5F5F5] w-full flex justify-center rounded-full cursor-pointer py-[1rem]'>
                        <span className='font-medium'>Open website</span>

                        <svg className='ml-[0.5rem]' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5846 6.05298L5.41797 15.2196M7.28888 5.42798H14.3763C14.8365 5.42798 15.2096 5.80107 15.2096 6.26131V14.1745" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default GreenBusinessessShow;