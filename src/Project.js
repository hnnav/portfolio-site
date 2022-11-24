import React from 'react'

function Project( {title, description, github, link} ) {
    return (
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="links">
                <a href={github}><ion-icon name="logo-github"></ion-icon></a>
                {link && <a href={link}><ion-icon name="globe-outline"></ion-icon></a>}
            </div>
        </div>
    )
}

export default Project
