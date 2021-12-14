import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom';
import Navbar from './navbar';
import Uvod from './uvod';
import './style.css';
import Vytvorit from './vytvorit';
import Vyzvednout from './vyzvednout';

const App = () => (
  <BrowserRouter>
   <Navbar/>


   <Routes>
    <Route path="/" element={<Uvod/>}/>
    <Route path="/create" element={<Vytvorit/>}/>
    <Route path="/pick" element={<Vyzvednout/>}/>
   </Routes>
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
