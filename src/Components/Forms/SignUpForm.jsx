import React from 'react'

export const SignUpForm = () => {
  return (
    <>
      <div className="form-group">
            <label class="form-label">Full name</label>
            <input class="form-control" placeholder="Your full name" />
        </div>
        <div className="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Your email address" />
        </div>
        <div className="form-group">
            <label class="form-label">Password</label>
            <input class="form-control" placeholder="Enter your password" />
        </div>
        <div className="form-group">
            <label class="form-label">Confirm Password</label>
            <input class="form-control" placeholder="Confirm your password" />
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" />
          <label class="form-check-label" for="flexCheckDefault">
              I accept the <a href="#">Terms and Conditions</a>
          </label>
        </div>
    </>
  )
}
