import React from "react";

export default function LoginPage(){
    return(
        <div>
              <div className="container text-center">
  <div className="row">
    <div className="col">
      <img src="recipe-app-img.jpg" alt="recipe img" width="400px" height="500"/>
    </div>
    <div className="col">
      <h1>Log in</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="check1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<a href="RegistrationPage">Don't have an account : Sign Up</a>
    </div>
  </div>
</div>
        </div>
    )
}