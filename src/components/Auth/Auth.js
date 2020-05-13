/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../App.scss';
import { Link } from 'react-router-dom'; 

const Auth = () => {
    return <div className="web">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Link to="/">
            <h2 style={{ textAlign: "center" }}>On main page</h2>
        </Link>
    </div>;
};

export default Auth;