
import React from "react"

export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
        <p className="forgot-password text-right mt-2">
            Already Memeber    <a href="#">Need help?</a>
          </p>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
          <div className="form-or">Or</div>
          <p className="forgot-password text-right mt-2">
            Don't Have an Account?  
          </p>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Create an Account
            </button>
          </div>
         
        </div>
      </form>
    </div>
  )
}
