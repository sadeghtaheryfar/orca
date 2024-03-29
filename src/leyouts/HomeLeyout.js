import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidbar from '../components/Sidbar';
import Header from '../components/Header';
import Nav from '../components/Nav';
import './../css/style.css?v=0.01';

const HomeLeyout = () => {
    return (
        <>
            <Header />

            <Sidbar />

            <Outlet />

            <Nav />
        </>
    );
};

export default HomeLeyout;