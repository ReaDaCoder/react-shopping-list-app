import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link} from 'react-router-dom';

export default function LoginPage(){ 
  const navigate = useNavigate();

  function handleLogin(){
    ev.preventDefault();
    navigate('/pages/AddedRecipes.jsx')
    
  
    // if (user.password !== user.confirmPassword) {
    //   setError("Passwords do not match!");
    //   return;
    // }
  }
    return(
        <div className="loginpage">
            <div className="container text-center">
  <div className="row">
    <div className="col">
    <img src="Fox Trot.jpg" alt="recipe img" width="400px" height="500"/>
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
  <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
</form>
<Link to="RegistrationPage">Don't have an account : Sign Up</Link>
    </div>
  </div>
</div>
        </div>
    );
}
// import React from "react";
// import '../App.css';
// import { useNavigate, Link} from 'react-router-dom';

// export default function LoginPage(){
//     return(
//         <div>
//               <div className="container text-center">
//   <div className="row">
//     <div className="col">
//       <img src="Fox Trot.jpg" alt="recipe img" width="400px" height="500"/>
//     </div>
//     <div className="col">
//       <h1>Log in</h1>
//       <form>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="inputPassword1" />
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="check1" />
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// <Link to="RegistrationPage">Don't have an account : Sign Up</Link>
//     </div>
//   </div>
// </div>
//         </div>
//     )
// }