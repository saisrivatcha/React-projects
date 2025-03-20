import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-secondary py-4">
      <div className="d-flex align-items-center justify-content-between px-3">
        <img
          src="https://www.logodesignlove.com/images/car/mercedes-benz-logo-black.jpg"
          alt=""
          className="image-fluid"
          style={{ height: "50px" }}
        />
        <ul className="nav justify-content-end fs-5">
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="signin">
              Signin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="technologies">
              Technologies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
