import React from 'react';
// import GotService from '../../services/gotService';
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
            <img alt='error' className="errorPic" src={process.env.PUBLIC_URL+'img/error.jpg'}></img>
            <span className="err">Something happens wrong!</span>
        </>
    );
};

export default ErrorMessage;