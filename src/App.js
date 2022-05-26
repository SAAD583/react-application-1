import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from "./Components/Menu";
import { Reviews } from "./Components/Reviews";
import {NavBar} from "./Components/NavBar";
import "./style.css";

export default function() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/reviews' element={<Reviews/>} />
                <Route path='/menu' element={<Menu/>} />
                <Route path='*' element={<Reviews/>} />
            </Routes>
        </BrowserRouter>
    )
}