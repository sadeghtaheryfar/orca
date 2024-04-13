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
                    <h2 className='font-semibold mb-[2rem] text-[28px]'>About Us</h2>
                </div>

                <div>
                    <p className='text-justify'>
                        We are a group of professionals with diverse backgrounds in finance and engineering, united by a shared passion for social, economic, and environmental sustainability. Recognizing the urgent need for collective action to address pressing global challenges, we have come together to create a social media platform dedicated to promoting environmental awareness and sustainability initiatives.  Our team brings together expertise from various fields, including finance, engineering, and environmental science, allowing us to approach sustainability from a multidisciplinary perspective. We believe that by leveraging our collective knowledge and experience, we can inspire positive change and empower individuals and communities to take meaningful action towards a more sustainable future.  At our core, we are driven by a commitment to fostering dialogue, sharing knowledge, and connecting like-minded individuals who are passionate about making a difference. Through our platform, we aim to provide a space for collaboration, education, and advocacy, where individuals can come together to explore innovative solutions, amplify voices for change, and celebrate successes in sustainability.  Join us on our journey as we strive to create a more sustainable world for future generations. Together, we can make a meaningful impact and create lasting change. Let's connect, collaborate, and inspire change together!
                    </p>

                    <div className='bg-[#EDFDED] px-[1.2rem] py-[0.7rem] rounded-[12px] text-[#525252] flex justify-start items-center w-full mt-[2rem]'>
                        <img className='mr-[0.5rem]' src={logo_comin_son} />
                        
                        <span>Stay Tuned for more updates coming soon!</span>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutUs;