import React from 'react';
import Portrait from '../../assets/portraitT2.png'

function About(){
    return (
            <section className='hero'>
                <img src={Portrait} alt="portrait"></img>
                <p>From the US Air Force, then to UTSA to web development and has been slow rolling that since Dec 2020.</p>
                <br/>
                <p>A whole new world where the road starts to bend.</p>
            </section>
    )
}

export default About;