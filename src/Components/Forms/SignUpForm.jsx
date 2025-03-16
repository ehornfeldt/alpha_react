import React from 'react'

export const SignUpForm = () => {
  return (
    <>
      <div className="form-group">
            <label className="form-label">Full name</label>
            <input className="form-control" placeholder="Your full name" />
        </div>
        <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Your email address" />
        </div>
        <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-control" placeholder="Enter your password" />
        </div>
        <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input className="form-control" placeholder="Confirm your password" />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
          <label className="form-check-label" for="flexCheckDefault">
              I accept the <a href="#">Terms and Conditions</a>
          </label>
        </div>
    </>
  )
}
