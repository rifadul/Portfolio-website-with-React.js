import React from 'react';

export default function AboutCard(porps) {
    const { icon, title, shortDescription } = porps;
    return (
        
            <article className="about__card">
                {icon}
                <h5>{title}</h5>
                <small>{shortDescription}</small>
            </article>
      
    );
}
