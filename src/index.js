import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import {Login} from "./Pages/login.jsx";
import {Register} from "./Pages/register.jsx";
import Chocotejas from "./Pages/chocotejas.jsx";
import PecanasConCascara from "./Pages/pecanasCon.jsx";
import Pecanas from "./Pages/pecanas.jsx";
import Tejas from "./Pages/tejas.jsx";
import Carrito from "./Pages/carrito.jsx";
import Contact from './Pages/contact';

import {Provider} from "react-redux";
import store from "./Redux/store";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route  path='home' element={<Home />} />
      <Route  path='login' element={<Login />} />
      <Route  path='register' element={<Register />} />
      <Route  path='cart' element={<Carrito />} />
      <Route  path='contact' element={<Contact />} />
      <Route  path='productos' >
        <Route  path='chocotejas' element={<Chocotejas />} />
        <Route  path='pecanas-con-cascara' element={<PecanasConCascara />} />
        <Route  path='pecanas-peladas' element={<Pecanas />} />
        <Route  path='tejas' element={<Tejas />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);

