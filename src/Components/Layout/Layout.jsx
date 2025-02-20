import React from 'react';
import Navbar from '../Common/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
