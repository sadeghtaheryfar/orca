import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import amazonelogo from './../../images/amazonelogo.png';
import banner from './../../images/banner.png';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Awareness = () => {
    return (
        <>
            <main id='main-posts'>
                <div className='hide-mobile'>
                    <h2 className='font-semibold text-[28px]'>Awareness</h2>
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

                <div>
                    <div className='border border-[#E6E6E6] p-[1.2rem] rounded-[1rem] bg-white my-[1rem]'>
                        <div className='flex justify-center items-center text-[#525252] border-b border-[#E6E6E6] pb-[0.5rem] mb-[0.5rem]'>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7083 1.60413L12.149 3.04477C12.3198 3.21562 12.3198 3.49263 12.149 3.66349L10.7083 5.10413M4.29167 12.3958L2.85103 10.9552C2.68017 10.7843 2.68017 10.5073 2.85103 10.3364L4.29167 8.89579M3.5625 10.6458H11.1458C11.7902 10.6458 12.3125 10.1235 12.3125 9.47913V7.72913M2.6875 5.97913V4.52079C2.6875 3.87646 3.20983 3.35413 3.85417 3.35413H11.4375" stroke="#666666" stroke-width="1.00347" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span className='ml-[0.5rem]'>Reposted by <b>Chris Do</b></span>
                        </div>

                        <div className='flex mb-[1rem]'>
                            <div className='w-[2.5rem] h-[2.5rem] mr-[0.5rem]'>
                                <img className='w-full rounded-full' src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" />
                            </div>

                            <div>
                                <div className='flex justify-center items-center font-semibold'>
                                    <span className='mr-[0.2rem]'>Chris Do</span>

                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4457 2.09719C10.9469 1.5231 10.0556 1.52311 9.55677 2.09719L8.13877 3.7292L6.00349 3.39048C5.25237 3.27133 4.56954 3.84429 4.55645 4.60469L4.51924 6.76635L2.66579 7.87941C2.01381 8.27095 1.85902 9.14877 2.33777 9.73969L3.69876 11.4195L2.99439 13.4636C2.74662 14.1826 3.1923 14.9545 3.93888 15.0995L6.06124 15.5115L6.83554 17.5301C7.10792 18.2401 7.94553 18.545 8.61059 18.1761L10.5013 17.1275L12.3919 18.1761C13.057 18.545 13.8946 18.2401 14.167 17.5301L14.9413 15.5115L17.0636 15.0995C17.8102 14.9545 18.2559 14.1826 18.0081 13.4636L17.3038 11.4195L18.6647 9.73969C19.1435 9.14878 18.9887 8.27095 18.3367 7.87941L16.4833 6.76635L16.4461 4.60469C16.433 3.84429 15.7501 3.27133 14.999 3.39048L12.8637 3.7292L11.4457 2.09719ZM13.1739 9.33922C13.4993 9.01378 13.4993 8.48614 13.1739 8.1607C12.8484 7.83527 12.3208 7.83527 11.9953 8.1607L9.66793 10.4881L9.00718 9.82737C8.68174 9.50193 8.1541 9.50193 7.82867 9.82737C7.50323 10.1528 7.50323 10.6804 7.82867 11.0059L8.78404 11.9613C9.2722 12.4494 10.0637 12.4494 10.5518 11.9613L13.1739 9.33922Z" fill="#10870C"/>
                                    </svg>
                                </div>

                                <div className='text-[12px] text-[#666666] font-semibold'>
                                    <span>2 days ago</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='font-bold text-[18px]'>
                                <h3>Deserts getting hotter!</h3>
                            </div>

                            <div className='text-[#525252] text-justify mt-[0.5rem] text-[15px]'>
                                <p>The once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distance</p>
                            </div>

                            <div className='text-[14px] font-bold cursor-pointer italic'>
                                <button>more...</button>
                            </div>
                        </div>

                        <div className='mt-[1rem]'>
                            <Swiper
                                pagination={{
                                    clickable: true,
                                    el: '.swiper-pagination',
                                }}
                                navigation={{ 
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                loop={true}
                                spaceBetween={20}
                            >
                                <SwiperSlide>
                                    <img className='w-full' src={banner} />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img className='w-full' src={banner} />
                                </SwiperSlide>

                                <div className='slider-news-post'>
                                    <div>
                                        <div className='swiper-button-prev' />
                                        <div className='swiper-pagination' />
                                        <div className='swiper-button-next' />
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>

                    <div className='border border-[#E6E6E6] p-[1.2rem] rounded-[1rem] bg-white my-[1rem]'>
                        <div className='flex justify-center items-center text-[#525252] border-b border-[#E6E6E6] pb-[0.5rem] mb-[0.5rem]'>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7083 1.60413L12.149 3.04477C12.3198 3.21562 12.3198 3.49263 12.149 3.66349L10.7083 5.10413M4.29167 12.3958L2.85103 10.9552C2.68017 10.7843 2.68017 10.5073 2.85103 10.3364L4.29167 8.89579M3.5625 10.6458H11.1458C11.7902 10.6458 12.3125 10.1235 12.3125 9.47913V7.72913M2.6875 5.97913V4.52079C2.6875 3.87646 3.20983 3.35413 3.85417 3.35413H11.4375" stroke="#666666" stroke-width="1.00347" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span className='ml-[0.5rem]'>Reposted by <b>Chris Do</b></span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex mb-[1rem]'>
                                <div className='w-[2.5rem] h-[2.5rem] mr-[0.5rem]'>
                                    <img className='w-full rounded-full' src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" />
                                </div>

                                <div>
                                    <div className='flex justify-center items-center font-semibold'>
                                        <span className='mr-[0.2rem]'>Chris Do</span>

                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4457 2.09719C10.9469 1.5231 10.0556 1.52311 9.55677 2.09719L8.13877 3.7292L6.00349 3.39048C5.25237 3.27133 4.56954 3.84429 4.55645 4.60469L4.51924 6.76635L2.66579 7.87941C2.01381 8.27095 1.85902 9.14877 2.33777 9.73969L3.69876 11.4195L2.99439 13.4636C2.74662 14.1826 3.1923 14.9545 3.93888 15.0995L6.06124 15.5115L6.83554 17.5301C7.10792 18.2401 7.94553 18.545 8.61059 18.1761L10.5013 17.1275L12.3919 18.1761C13.057 18.545 13.8946 18.2401 14.167 17.5301L14.9413 15.5115L17.0636 15.0995C17.8102 14.9545 18.2559 14.1826 18.0081 13.4636L17.3038 11.4195L18.6647 9.73969C19.1435 9.14878 18.9887 8.27095 18.3367 7.87941L16.4833 6.76635L16.4461 4.60469C16.433 3.84429 15.7501 3.27133 14.999 3.39048L12.8637 3.7292L11.4457 2.09719ZM13.1739 9.33922C13.4993 9.01378 13.4993 8.48614 13.1739 8.1607C12.8484 7.83527 12.3208 7.83527 11.9953 8.1607L9.66793 10.4881L9.00718 9.82737C8.68174 9.50193 8.1541 9.50193 7.82867 9.82737C7.50323 10.1528 7.50323 10.6804 7.82867 11.0059L8.78404 11.9613C9.2722 12.4494 10.0637 12.4494 10.5518 11.9613L13.1739 9.33922Z" fill="#10870C"/>
                                        </svg>
                                    </div>

                                    <div className='text-[12px] text-[#666666] font-semibold'>
                                        <span>2 days ago</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='bg-[#F5F5F5] px-[0.9rem] py-[0.3rem] rounded-[0.5rem] font-semibold text-[#525252]'>
                                    <span>Awareness</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='font-bold text-[18px]'>
                                <h3>Deserts getting hotter!</h3>
                            </div>

                            <div className='text-[#525252] text-justify mt-[0.5rem] text-[15px]'>
                                <p>The once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distance</p>
                            </div>

                            <div className='text-[14px] font-bold cursor-pointer italic'>
                                <button>more...</button>
                            </div>
                        </div>

                        <div className='bg-[#F5F5F5] p-[0.5rem] border border-[#F0F0F0] rounded-[0.5rem] my-[0.5rem] flex'>
                            <div className='w-[3.5rem] min-w-[3.5rem] h-[3.5rem]'>
                                <img className='rounded-[0.5rem]' src='https://www.greatersydneyparklands.nsw.gov.au/sites/default/files/2024-01/environment-and-nature-banner-1080x1080.jpg' />
                            </div>

                            <div className='ml-[1rem]'>
                                <div className='text-[#666666] text-[14px]'>
                                    <span>X.com</span>
                                </div>

                                <div className='font-semibold text-[#525252] text-[18px]'>
                                    <h4>Deserts getting hotter!</h4>
                                </div>

                                <div className='text-[#666666] text-[15px] text-justify'>
                                    <p>The once vibrant colors of the desert flora are now dulled by the relentless heat, the once lush oases now little more than mirages in the shimmering distance</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-[1rem]'>
                            <Swiper
                                pagination={{
                                    clickable: true,
                                    el: '.swiper-pagination',
                                }}
                                navigation={{ 
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                loop={true}
                                spaceBetween={20}
                            >
                                <SwiperSlide>
                                    <img className='w-full' src={banner} />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img className='w-full' src={banner} />
                                </SwiperSlide>

                                <div className='slider-news-post'>
                                    <div>
                                        <div className='swiper-button-prev' />
                                        <div className='swiper-pagination' />
                                        <div className='swiper-button-next' />
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Awareness;