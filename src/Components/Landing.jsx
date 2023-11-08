import React from 'react';
import Home from './Home';
import ColorA from './ColorA';
import ColorB from './ColorB';
import ColorC from './ColorC';
import { Nav } from './Nav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const Landing = () => {
    return (
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/compA" element={<ColorA/>}/>
            <Route path="/compB" element={<ColorB/>}/>
            <Route path="/compC" element={<ColorC/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default Landing;