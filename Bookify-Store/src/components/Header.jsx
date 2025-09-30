import { Link } from "react-router";

export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-light shadow-sm rounded-3 px-4">
        {/* Logo */}
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex align-items-center link-dark text-decoration-none"
          >
            <i className="fa-solid fa-book text-primary fs-4"></i>
            <span className="ms-2 fs-4 fw-bold">Bookfiy</span>
          </Link>
        </div>

        {/* Menu */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-3 text-dark fw-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="nav-link px-3 text-dark fw-semibold">
              Book
            </Link>
          </li>
          <li>
            <Link to="/teams" className="nav-link px-3 text-dark fw-semibold">
              Team
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="nav-link px-3 text-dark fw-semibold">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link px-3 text-dark fw-semibold">
              Service
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="col-md-3 text-end">
          <Link to="/login">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
          </Link>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </header>
    </div>
  );
}
