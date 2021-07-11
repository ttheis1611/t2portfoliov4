import React from 'react';


function ProjectCard({url, title, image, repo}){
   
    return(
        <li> 
            <a target="_blank" rel="noreferrer" className="repo-link" href={repo}>
            <img className="screenshot" src={image} alt={title}></img>
            </a>
            <br/> 
            <a target="_blank" rel="noreferrer" className="text-link" href={url}>{title}</a>        
        </li>
    )
}

export default ProjectCard;