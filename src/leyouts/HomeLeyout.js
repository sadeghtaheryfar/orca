import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../components/Header';
import './../css/style.css';

const HomeLeyout = () => {
    return (
        <>
            <Header />
            
            <Outlet />
        </>
    );
};

export default HomeLeyout;