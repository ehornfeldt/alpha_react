import React from 'react'

export const ProjectCard = ({title, app, content}) => {
  return (
    <div className="project-card">
        <div className="card-header">
            <img src="./src/assets/card-icon.svg" alt="project logo" />
            <div className="project-name">
                <h6>{title}</h6>
                <p>{app}</p>
            </div>  
            <img src="./src/assets/more.svg" alt="more icon" />
        </div>
        <div className="card-content">
            <p>{content}</p>
        </div>
    </div>
  )
}
