import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Technologies() {
  return (
    <div>
      <div className="container">
        <h2 className="mt-3">Technologies</h2>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="reactjs">
              ReactJS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="angular">
              Angular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="vue">
              Vue
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default Technologies;
