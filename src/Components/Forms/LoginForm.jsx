import React from 'react'

export const LoginForm = () => {
  return (
    <>
        <div className="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Your email address" />
        </div>
        <div className="form-group">
            <label class="form-label">Password</label>
            <input class="form-control" placeholder="Enter your password" />
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" />
          <label class="form-check-label" for="flexCheckDefault">
              Remember me
          </label>
        </div>
    </>
  )
}
