import React from 'react'
import Project from './Project'

function Projects() {
    return (
        <div className="all-projects">
            <img className="projects-title" src="/images/projects.png" alt="title"></img>
            <Project 
                title="To Do List"
                description="React + node and mongoDB backend"
                github="https://github.com/hnnav/todo-app"
                link="https://todo-app-zddb.onrender.com/"
            />
            <Project 
                title="Countries"
                description="React multi-page with API"
                github="https://github.com/hnnav/rest-countries-api"
                link="https://countries-wiki.onrender.com/"
            />
            <Project 
                title="Fylo landing page"
                description="JavaScript single page"
                github="https://github.com/hnnav/fylo-dark-theme"
                link=""
            />
            <Project 
                title="URL shortening app"
                description="JavaScript with API"
                github="https://github.com/digitalents-academy/url-shortening-api/tree/main"
                link=""
            />
        </div>
    )
}

export default Projects
