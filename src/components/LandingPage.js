import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        const portal = document.querySelector('.landing-portal');
        portal.classList.add('expand');
        setTimeout(() => {
            navigate('/home');
        }, 1000); 
    };

    return (
        <div className="landing">
            <img className="landing-portal" src="/portal.png" alt="Portal´s Rick and Morty"/>
            <button className="landing-button" onClick={navigateToHome}>
                Enter the Multiverse
            </button>
            <img className='landing-image one' src='/squanchi.png' alt='imagen de squanchi' />
            <img className='landing-image two' src='/pepinillo.png' alt='pepinillo Rick' />
            <img className='landing-image three' src='/perrito.png' alt='perrito de Jerry' />
            <img className='landing-image four' src='/cabeza-gigante.png' alt='Imagen de cabeza gigante' />
            <img className='landing-image five' src='/nave.png' alt='Imagen de nave de rick' />
        </div>
    );
};

export default LandingPage;
