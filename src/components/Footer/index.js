import React from 'react';
import FooterData from '../../products/footers.js'


function footer(){
//we can map trough each one of the icons and items in the footer....
    return(
        <footer>
            <div>
                <br/>
                <h2 id="contact-info">
                    Other places to find me
                </h2>
                <br/>
            </div>
            <div>
                <ul className="footerBar">{
                    FooterData.map(footer=>{                        
                        return <li key={footer.id}>
                                    <a target="_blank" rel="noreferrer" className="text-link" href={footer.url}>
                                    <img className="footer-icon" src={footer.image} alt={footer.alt}></img>
                                    </a>
                                </li>
                    })
                    }
                </ul>
                <br/>
                <p>2021 - Portfolio for Terry Theis</p>
            </div>
        </footer>
    )
}

export default footer;