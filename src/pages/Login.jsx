import React,{useRef} from "react";
import '@styles/Login.scss'
import logo from '@assets/logo.png'
import axios from "axios";
import { useHref } from "react-router-dom";
import { Link } from 'react-router-dom';

const CLIENT_ID = '735994510357-bbediuj5gidbadqngan2ke7f0v04h12g.apps.googleusercontent.com';
const Login = () => {

//crear una constante asignandole el valor de useRef

const handleLoginClick = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${window.location.origin}/oauth2callback&response_type=code&scope=profile%20email`;
  };


    return (
        <div className="login">
            <div className="form-container">

                <h1 className="title-page">Iniciar Sesión</h1>
                <img src={logo} alt="" className="logo-login" />
                <h2 className="title-store">Book Nook</h2>
                <button className="boton-principall" onClick={handleLoginClick}>Login with Google</button>
       

            </div>
        </div>

    );
}

export default Login;