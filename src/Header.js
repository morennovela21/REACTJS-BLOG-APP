import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg  bg-body-tertiary navbar bg-secondary">
      <div className="container-fluid">
        <img
          src="https://i.pinimg.com/originals/c3/db/3e/c3db3ef5fa7ce3c7956d0c3343207204.jpg"
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        ></img>
        <Link to="/main" className="navbar-brand">
          MYSTIC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/main"
                className="nav-link active"
                aria-current="page"
                href="/#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="/#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" href="/#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/footer" className="nav-link" href="/#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;