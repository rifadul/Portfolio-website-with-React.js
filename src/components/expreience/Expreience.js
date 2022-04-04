import React from 'react';
// import ExperienceStacks from './ExperienceStacks';
import { BsPatchCheckFill } from 'react-icons/bs';
import './expreience.css';

export default function Expreience() {
    return (
        <section className="experience" id="experience">
            <h5>What Skill's I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>

                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
