import React from 'react'
import { Modal } from "./Modals/Modal"

export const ProjectCard = ({title, app, content}) => {

    return (
        <div className="project-card">
            <div className="card-header">
                <img src="./src/assets/card-icon.svg" alt="project logo" />
                <div className="project-name">
                    <h6>{title}</h6>
                    <p>{app}</p>
                </div>  
                <div className="more-menu">
                    <button type="button" className="more-btn" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="./src/assets/more.svg" alt="more icon" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <p className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#editProjectModal"> 
                                <img src="./src/assets/edit-pen.svg" alt="edit pen icon" />
                                Edit
                            </p>
                        </li>
                        <div className="separator" />
                        <li>
                            <p className="dropdown-item delete" type="button">
                                <img src="./src/assets/trash.svg" alt="trash icon" />
                                Delete Project
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-content">
                <p>{content}</p>
            </div>

            <Modal title="Edit Project" btnText={"Save Changes"} modalId="editProjectModal"/>
    
        </div>
    )
}
