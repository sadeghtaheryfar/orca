import React, { useRef, useState,useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery,useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import 'swiper/css';
import axios from 'axios';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//  images ................................................................................................
import logo_comin_son from '../../images/green-technology.png';



const AboutUs = () => {
    const [isloding, setIsloding] = useState(false);
    const [Data, setData] = useState();
    const [response, setresponse] = useState();

    const [email, setemail] = useState();
    const [body, setbody] = useState();
    const [subject, setsubject] = useState();
    const [name, setname] = useState();

    const fechData = async (data) => {
        setIsloding(true);
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        
        const formdata = new FormData();
        if(email)
        {
            formdata.append("email", email);
        }
        if(body)
        {
            formdata.append("body", body);
        }
        if(subject)
        {
            formdata.append("subject", subject);
        }
        if(name)
        {
            formdata.append("name", name);
        }
        
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };
        
        setresponse(fetch("https://api.theorcasocial.com/v1/supports", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setIsloding(false);
                setData(result);
                if(!result.errors && result?.status != 'error'){
                    var inputs = document.querySelectorAll('.form-input');
                    inputs.forEach(input => {
                        input.value = '';
                    });
                }
            })
            .catch((error) => console.error(error)))
    }

    return (
        <>
            <main id='main-posts' className='!bg-white'>
                <div className='hide-mobile'>
                    <h2 className='font-semibold mb-[1.5rem] text-[28px]'>Contact Us</h2>
                </div>

                <div>
                    <form>
                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <label className='text-[#525252] font-semibold form-input' htmlFor='subject'>Subject</label>

                            {(Data?.errors?.subject) ? (
                                <span className='text-red-500 text-[12px]'>{Data?.errors?.subject}</span>
                            ) : (
                                <></>
                            )}

                            <input onChange={(e) => setsubject(e.target.value)} id='subject' type='text' className='form-input mt-[0.5rem] w-full h-[3rem] p-[1rem] bg-[#F5F5F5] rounded-[0.5rem] input-hover' />
                        </div>

                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <label className='text-[#525252] font-semibold' htmlFor='name'>Name *</label>

                            {(Data?.errors?.name) ? (
                                <span className='text-red-500 text-[12px]'>{Data?.errors?.name}</span>
                            ) : (
                                <></>
                            )}

                            <input onChange={(e) => setname(e.target.value)} id='name' type='text' name='name' className='form-input mt-[0.5rem] w-full h-[3rem] p-[1rem] bg-[#F5F5F5] rounded-[0.5rem] input-hover' />
                        </div>

                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <label className='text-[#525252] font-semibold' htmlFor='email'>Email *</label>

                            {(Data?.errors?.email) ? (
                                <span className='text-red-500 text-[12px]'>{Data?.errors?.email}</span>
                            ) : (
                                <></>
                            )}

                            <input onChange={(e) => setemail(e.target.value)} id='email' type='text' className='form-input mt-[0.5rem] w-full h-[3rem] p-[1rem] bg-[#F5F5F5] rounded-[0.5rem] input-hover' />
                        </div>

                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <label className='text-[#525252] font-semibold' htmlFor='message'>Message *</label>

                            {(Data?.errors?.body) ? (
                                <span className='text-red-500 text-[12px]'>{Data?.errors?.body}</span>
                            ) : (
                                <></>
                            )}

                            <textarea onChange={(e) => setbody(e.target.value)} id='message' type='text' className='form-input mt-[0.5rem] w-full h-[15rem] p-[1rem] bg-[#F5F5F5] rounded-[0.5rem] input-hover'></textarea>
                        </div>

                        <div className='my-[1rem] w-full text-center'>
                            {(Data?.errors && Data?.message || Data?.status == 'error') ? (
                                    <span className='text-red-500 text-[14px] font-semibold text-center'>{Data?.message}</span>
                                ) :  (
                                    <span className='text-green-500 text-[14px] font-semibold text-center'>{Data?.message}</span>
                            )}
                        </div>

                        <div className='my-[1.5rem] flex flex-col w-full'>
                            <button onClick={(e) => fechData(e)} type='button' className='bg-black h-[3.5rem] text-white rounded-full font-semibold text-[18px]'>
                                {(!isloding) ? 'submit' : 'loading ...'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default AboutUs;