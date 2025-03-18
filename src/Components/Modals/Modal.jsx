import React from 'react'

export const Modal = ({title, btnText}) => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title fs-5" id="exampleModalLabel">{title}</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="modal-img">
                    <img src="./src/assets/modal-image.svg" alt="modal image" />
                </div>
                <div className="modal-form">
                    <div className="form-group">
                        <label className="form-label">Project Name</label>
                        <input className="form-control" placeholder="Project Name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Client Name</label>
                        <input className="form-control" placeholder="Client Name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" placeholder="Type something" />
                    </div>
                    <div className="date-pickers">
                        <div className="form-group">
                            <label  className="form-label" for="startDate">Start Date</label>
                            <input id="startDate" className="form-control" type="date" />
                        </div>
                        <div className="form-group">
                            <label  className="form-label" for="startDate">End Date</label>
                            <input id="startDate" className="form-control" type="date" />
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label  className="form-label" for="startDate">Budget</label>
                        <div className="budget">
                            <img className="dollar-icon" src="./src/assets/dollar-icon.svg" alt="dollar icon" />
                            <input type="text" className="form-control budget-form" aria-label="Amount (to the nearest dollar)" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary">{btnText}</button>
            </div>
            </div>
        </div>
    </div>
  )
}
