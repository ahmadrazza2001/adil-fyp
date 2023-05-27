import "./home.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <nav>
        <h2>EDU-ASSIST</h2>
      </nav>
      <section class="main">
        <div class="section-1">
          <div class="card-1">
            <h2>Admission</h2>
            <Link to="/admission">Apply Online</Link>
          </div>
          <div class="card-2">
            <h2>Student</h2>
            <Link to="/student">Sign in</Link>
          </div>
        </div>

        <div class="section-2">
          <div class="card-3">
            <h2>Faculty Member</h2>
            <Link to="/faculty">Sign in</Link>
          </div>
          <div class="card-4">
            <h2>Parents</h2>
            <Link to="/parents">Sign in</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
