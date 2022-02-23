import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import AboutCard from './AboutCard';
import ME from '../../assets/Siam_Khushnobish.png';

export default function About() {
    return (
        <section id="about" className="about">
            <h5>Get To Known</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me__image">
                        <img src={ME} alt="Rifadul Islam Khushnobish Siam" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <AboutCard
                            icon={<FaAward className="about__icon" />}
                            title={'Expreance'}
                            shortDescription={'3+ Years Working'}
                        />
                        <AboutCard
                            icon={<FiUsers className="about__icon" />}
                            title={'Clients'}
                            shortDescription={'200+ Worldwide'}
                        />
                        <AboutCard
                            icon={<VscFolderLibrary className="about__icon" />}
                            title={'Projects'}
                            shortDescription={'80+ Completed'}
                        />
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Assumenda, eius ad aspernatur corrupti minima
                        beatae dicta. Blanditiis ipsum necessitatibus voluptate
                        possimus? Ipsum impedit laborum libero obcaecati
                        pariatur odio nemo beatae?
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}
