import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <div className="container">
        <NavLink className='navbar-brand' to='/'>
          <i class="fab fa-github fa-2x"></i> Hello World
        </NavLink>
        <Nav className="ml-auto">
            <NavLink to='/' className='nav-link' exact activeClassName='active'>Home</NavLink>
            <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink> 
            <NavLink to='/courses' className='nav-link' activeClassName='active'>Courses</NavLink>
            <NavLink to='/products' className='nav-link' activeClassName='active'>Products</NavLink>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavBar;
