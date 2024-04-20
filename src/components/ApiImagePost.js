import React from 'react';
import { useState,useEffect } from 'react';
import ApiImage from './ApiImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { QueryClient } from 'react-query';
import { useQuery } from 'react-query';

const queryClient = new QueryClient();

const fetchData = async (postid) => {
    const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
    
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

    const response = await fetch('https://api.theorcasocial.com/v1/awareness/' + postid, requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const ApiImagePost = (path) => {
    const { data, isLoading, error } = useQuery(['post', path.postid], () => fetchData(path.postid));

    return (
        <>
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
                className="mySwiper lg:mx-[5%]"
                spaceBetween={20}
            >
                {data?.data?.media.map((item) => (
                    <SwiperSlide key={Math.random()}>
                        <ApiImage mime_type={item?.mime_type} path={item?.original} clas='w-full rounded-[1rem]' disk={item?.disk}  />
                    </SwiperSlide>
                ))}

                <div className='slider-news-post'>
                    <div>
                        <div className='swiper-button-prev' />
                        <div className='swiper-pagination' />
                        <div className='swiper-button-next' />
                    </div>
                </div>
            </Swiper>
        </>
    );
};

export default ApiImagePost;