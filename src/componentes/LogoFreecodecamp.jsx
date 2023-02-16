import React from 'react';
import freeCodeCampLogo from '../img/freecodecamp-logo.svg';
import '../css/LogoFreecodecamp.css';

export default function LogoFreecodecamp() {
    return (
        <div className='freecodecamp-logo-contenedor'>
            <img className='freecodecamp-logo'
                src={freeCodeCampLogo}
                alt='Logo de freecodecamp' />
        </div>
    );
};