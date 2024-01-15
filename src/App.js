import logo from './assets/logo.png';
import './App.css';

import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import QuemSomos from './components/QuemSomos';
import Step2 from './components/Step2';

import {GetUserIDToken} from './userpool.js';
import { jwtDecode } from "jwt-decode";

import MyUnityCareer from './MyUnityCareer';


function App() {


    const GetUserName = () => {
        const decoded = jwtDecode(window.location.search);
        console.log(decoded);
        //return decoded;
    };

    return (
        
        <div>
            <header>

                <div class="header-wrapper" >
                    <a class="logo" href="/" >
                        <img class="logo-img" src={logo} alt="Logo" />
                    </a>

                    

                    <div class="nav-links">
                        <a href="#link1" class="nav-item">Link 1</a>
                        <a href="#link2" class="nav-item">Link 2</a>
                        <a href="#link3" class="nav-item">Link 3</a>
                    </div>

                </div>

                

            </header>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<main>

                        <div class="main-wrapper">
                            <h1 class="main-body-h1">SUA MARCA
                                <br />NAS
                                <span class="main-body-span"> MELHORES</span>
                                <br />MAOS
                                 
                            </h1>
                            <h3 class="main-body-h3"><i>Registro de marcas no INPI. Tudo online.</i></h3>
                            <h2 class="main-body-h2">A partir de 12x R$44,99*.</h2>
                            <h4 class="main-body-h4">* O contrato tera prazo minimo de 12 meses.<br /> <a class="confira-aqui" target="_blank" href="/site/terms">Confira aqui </a><div class="confira-link">    o contrato de adesao.</div ></h4>
                            <a class="botao-comecar" >
                                <input type="button" class="btn2" value="COMECAR" onClick={GetUserName} />
                            </a>
                        </div>

                    </main>} />
                    
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/QuemSomos" element={<MyUnityCareer />} />
                    <Route path="/Step2" element={<Step2/>}/>
                </Routes>
            </BrowserRouter>
            
            <footer>
                <div class="footer-wrapper">

                    <div class="col-xs-0 col-sm-0 col-md-6 col-lg-6">
                        <h1 class="footer-h1-1">Registroteca</h1>
                        <br/>
                            <table>
                                <tbody>
                                    
                                    <tr>
                                    <td><a href="/quemSomos">Quem somos</a></td>
                                        

                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    
                    </div>

                </footer>
        </div>
        );
}

            export default App;

