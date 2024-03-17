import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazonelogo from './../../images/amazonelogo.png';
import { Link } from 'react-router-dom';
import 'swiper/css';

const GreenBusinesses = () => {
    return (
        <>
            <main id='main-posts'>
                <div className='hide-mobile'>
                    <h2 className='font-semibold text-[28px]'>Green Market</h2>
                </div>

                <div className='my-[0.5rem] relative flex items-center hide-mobile'>
                    <input className='px-[1.4rem] py-[0.6rem] w-full bg-[#F1F1F1] rounded-full text-[18px]' type='text' placeholder='Search' />

                    <button className='absolute right-[1.2rem]'>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.75 20.25L16.6265 16.1265M16.6265 16.1265C17.9385 14.8145 18.75 13.002 18.75 11C18.75 6.99594 15.5041 3.75 11.5 3.75C7.49594 3.75 4.25 6.99594 4.25 11C4.25 15.0041 7.49594 18.25 11.5 18.25C13.502 18.25 15.3145 17.4385 16.6265 16.1265Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div>
                    <Swiper
                        slidesPerView={'auto'}
                        grabCursor={'true'}
                        spaceBetween={10}
                        className='hide-mobile'
                    >
                        <SwiperSlide className='w-auto my-[1rem] border-r pr-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.50107 2.66663C4.77721 2.66663 5.00107 2.89048 5.00107 3.16663V11.6257L6.14635 10.4798C6.34156 10.2845 6.65814 10.2844 6.85346 10.4796C7.04877 10.6749 7.04886 10.9914 6.85365 11.1868L4.85471 13.1868C4.76097 13.2805 4.63381 13.3333 4.5012 13.3333C4.36859 13.3333 4.2414 13.2807 4.14761 13.1869L2.14654 11.1869C1.95123 10.9917 1.95114 10.6751 2.14635 10.4798C2.34156 10.2845 2.65815 10.2844 2.85346 10.4796L4.00107 11.6266V3.16663C4.00107 2.89048 4.22492 2.66663 4.50107 2.66663Z" fill="black"/>
                                    <path d="M8.33333 3.99996C8.05719 3.99996 7.83333 4.22382 7.83333 4.49996C7.83333 4.7761 8.05719 4.99996 8.33333 4.99996H14C14.2761 4.99996 14.5 4.7761 14.5 4.49996C14.5 4.22382 14.2761 3.99996 14 3.99996H8.33333Z" fill="black"/>
                                    <path d="M11 11C10.7239 11 10.5 11.2238 10.5 11.5C10.5 11.7761 10.7239 12 11 12H14C14.2761 12 14.5 11.7761 14.5 11.5C14.5 11.2238 14.2761 11 14 11H11Z" fill="black"/>
                                    <path d="M9.16667 7.99996C9.16667 7.72382 9.39052 7.49996 9.66667 7.49996H14C14.2761 7.49996 14.5 7.72382 14.5 7.99996C14.5 8.2761 14.2761 8.49996 14 8.49996H9.66667C9.39052 8.49996 9.16667 8.2761 9.16667 7.99996Z" fill="black"/>
                                </svg>

                                <span className='ml-[0.3rem]'>Filter</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className='w-auto my-[1rem]'>
                            <button className='flex items-center justify-center border border-[#E6E6E6] rounded-full px-[0.7rem] py-[0.4rem] font-medium'>
                                <span>Topic</span>
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                    <Link to={'/GreenBusinesses/1'} className='border border-[#E6E6E6] rounded-[12px] p-[0.5rem] flex flex-col justify-center bg-white'>
                        <div>
                            <h6 className='text-[14px] font-semibold'>Business Name</h6>
                        </div>

                        <div className='mt-[0.2rem] mb-[0.8rem]'>
                            <p className='text-[12px] text-[#525252]'>Description  Description</p>
                        </div>

                        <div>
                            <img className='w-full' src={amazonelogo} />
                        </div>
                    </Link>
                    
                    <Link className='border border-[#E6E6E6] rounded-[12px] p-[0.5rem] flex flex-col justify-center bg-white'>
                        <div>
                            <h6 className='text-[14px] font-semibold'>Business Name</h6>
                        </div>

                        <div className='mt-[0.2rem] mb-[0.8rem]'>
                            <p className='text-[12px] text-[#525252]'>Description  Description</p>
                        </div>

                        <div>
                            <img className='w-full' src={amazonelogo} />
                        </div>
                    </Link>
                    
                    <Link className='border border-[#E6E6E6] rounded-[12px] p-[0.5rem] flex flex-col justify-center bg-white'>
                        <div>
                            <h6 className='text-[14px] font-semibold'>Business Name</h6>
                        </div>

                        <div className='mt-[0.2rem] mb-[0.8rem]'>
                            <p className='text-[12px] text-[#525252]'>Description  Description</p>
                        </div>

                        <div>
                            <img className='w-full' src={amazonelogo} />
                        </div>
                    </Link>
                    
                    <Link className='border border-[#E6E6E6] rounded-[12px] p-[0.5rem] flex flex-col justify-center bg-white'>
                        <div>
                            <h6 className='text-[14px] font-semibold'>Business Name</h6>
                        </div>

                        <div className='mt-[0.2rem] mb-[0.8rem]'>
                            <p className='text-[12px] text-[#525252]'>Description  Description</p>
                        </div>

                        <div>
                            <img className='w-full' src={amazonelogo} />
                        </div>
                    </Link>
                    
                    <Link className='border border-[#E6E6E6] rounded-[12px] p-[0.5rem] flex flex-col justify-center bg-white'>
                        <div>
                            <h6 className='text-[14px] font-semibold'>Business Name</h6>
                        </div>

                        <div className='mt-[0.2rem] mb-[0.8rem]'>
                            <p className='text-[12px] text-[#525252]'>Description  Description</p>
                        </div>

                        <div>
                            <img className='w-full' src={amazonelogo} />
                        </div>
                    </Link>
                    
                    <Link className='border border-[#E6E6E6] rounded-[12px] p-[0.5rem] flex flex-col justify-center bg-white'>
                        <div>
                            <h6 className='text-[14px] font-semibold'>Business Name</h6>
                        </div>

                        <div className='mt-[0.2rem] mb-[0.8rem]'>
                            <p className='text-[12px] text-[#525252]'>Description  Description</p>
                        </div>

                        <div>
                            <img className='w-full' src={amazonelogo} />
                        </div>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default GreenBusinesses;