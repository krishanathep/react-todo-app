import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <i class="fab fa-github fa-lg"></i> Navbar scroll
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto">
            <NavLink to="/" className="nav-link" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink
              to="/courses"
              className="nav-link"
              activeClassName="active"
            >
              Courses
            </NavLink>
            <NavLink
              to="/products"
              className="nav-link"
              activeClassName="active"
            >
              Products
            </NavLink>
            <NavLink
              to="/crud"
              className="nav-link"
              activeClassName="active"
            >
              CRUD
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
