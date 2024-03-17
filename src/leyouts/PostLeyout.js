import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidbar from '../components/Sidbar';
import HeaderPost from '../components/HeaderPost';
import Nav from '../components/Nav';
import './../css/style.css';

const PostLeyout = () => {
    return (
        <>
            <HeaderPost />

            <Sidbar />

            <Outlet />

            <Nav />
        </>
    );
};

export default PostLeyout;