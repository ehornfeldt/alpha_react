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
            {/* <img src="./src/assets/more.svg" alt="more icon" /> */}
            <div className="more-menu">
                <button type="button" className="more-btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./src/assets/more.svg" alt="more icon" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><button className="dropdown-item" type="button"> 
                        <img src="./src/assets/edit-pen.svg" alt="edit pen icon" />
                        Edit
                    </button></li>
                    <div className="separator" />
                    <li><button className="dropdown-item" type="button">
                        <img src="./src/assets/trash.svg" alt="trash icon" />
                        Delete
                    </button></li>
                </ul>
            </div>
        </div>
        <div className="card-content">
            <p>{content}</p>
        </div>
    </div>
  )
}
