import React from 'react';
import CallToAction from './CallToAction';
import './header.css';
import ME from '../../assets/Siam_Khushnobish.png'
import HeaderSocials from './HeaderSocials';
export default function Header() {
    return (
        <header className="container header__container" id="header">
            <h5>Hello I'm</h5>
            <h1>Siam Khushnobish</h1>
            <h5 className="text-light"> Fullstact Developer</h5>
            <CallToAction/>
            <HeaderSocials/>
            <div className="me">
                <img src={ME} alt="Rifadul Islam Khushnobish Siam" />
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>
            
        </header>
    );
}
