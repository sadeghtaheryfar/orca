import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidbar from '../components/Sidbar';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ScrollToTop from '../components/ScrollToTop';
import './../css/style.css?v=0.01';

const HomeLeyout = () => {
    return (
        <>
            <Header />

            <ScrollToTop />

            <Sidbar />

            <Outlet />

            <Nav />
        </>
    );
};

export default HomeLeyout;