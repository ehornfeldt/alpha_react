import { useState } from "react"
import { LoginForm } from "./Forms/LoginForm"
import { SignUpForm } from "./Forms/SignUpForm"

function PortalView({ title, logIn }) {

    const [isLogIn, setIsLogIn] = useState(logIn)

    const switchForm = (isLogIn) => {
        setIsLogIn(isLogIn)
    }

    return (
      <div className="portal">
        <div className="portal-module">
            <h1>{isLogIn ? "Login" : "Create Account"}</h1>
            <button type="button" class="btn btn-light google">
                <img src="./src/assets/google-icon.svg" alt="google icon" />
                {isLogIn ? "Login with Google" : "Sign up with Google"}
            </button>
            <div className="separator">
                <hr /> <p>OR</p> <hr />
            </div>
            <div className="portal-forms">
                {isLogIn ? <LoginForm /> : <SignUpForm />}
            </div>
            <button type="button" className="btn btn-primary">
                {isLogIn ? "Login" : "Sign up"}
            </button>
            {isLogIn ? <p>Don't have an account? <a onClick={() => switchForm(false)} href="#">Sign up</a></p> : 
            <p>Already have an account? <a onClick={() => switchForm(true)}  href="#">Login</a></p>}
        </div>
      </div>
    )
  }
  
  export default PortalView