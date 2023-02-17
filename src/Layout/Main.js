import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Containers/Footer/Footer';
import Header from '../Containers/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;