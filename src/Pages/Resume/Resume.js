import React from 'react';
import CV from '../../assets/Resume/ResumeScreenshot.PNG';
import './resume.css'

function resume(){
    return(
        <section className='resume'>
            <h3>Click Screenshot to Download</h3>
            <a className="text-link" href="../../assets/Resume/Terry_Theis_2021.pdf" download>
                <img className="resume-shot" src={CV} alt='resume'></img>
            </a>
            <br/>
        </section>
    )
}

export default resume;