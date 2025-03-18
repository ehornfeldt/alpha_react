import React from 'react'

export const LoginForm = () => {
  return (
    <>
        <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your email address" />
        </div>
        <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-control" placeholder="Enter your password" />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
          <label className="form-check-label" for="flexCheckDefault">
              Remember me
          </label>
        </div>
    </>
  )
}
