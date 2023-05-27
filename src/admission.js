import "./admission.css";
import React from "react";
import { Link } from "react-router-dom";
function Admission() {
  return (
    <>
      <nav>
        <h2>EDU-ASSIST</h2>
      </nav>
      <h1>Admissions</h1>
      <form className="form" action="">
        <h3>Candidate Sign in</h3>
        <div>
          <label>Semester:</label>
          <input type="text" placeholder="Fall-2023" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="someone@example.com" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="links">
          <Link className="signin" to="/Admission-acc">
            Sign in
          </Link>
          <Link className="forgot" to="/forgotPassword">
            Forgot Password?
          </Link>
          <Link className="signup" to="/create-candidate">
            Create New Account
          </Link>
        </div>
      </form>
    </>
  );
}
export default Admission;
