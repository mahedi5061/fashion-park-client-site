import React, { useContext } from 'react';
import './Header.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../App';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
const Header = () => {
    const [login, setLogin] = useContext(userContext);

    return (
       <>
       {/* This is header section */}
       
            <Navbar expand="lg">
                <Navbar href="#home" className="navbar-container"><h1><span className="fashion">Fashion</span><span className="park"> Park</span></h1></Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="header-container" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link  ><Link to="/home" className="navbar-container">Home</Link></Nav.Link>
                        <Nav.Link  ><Link to="/orders" className="navbar-container">Orders</Link></Nav.Link>
                        <Nav.Link  ><Link to="/admin" className="navbar-container">Admin</Link></Nav.Link>
                        <Nav.Link  > <Link to="/deals" className="navbar-container">Deals</Link></Nav.Link>


                        {/* This is dynamic button for login and displayName*/}

                        {
                            login.email ? <Nav.Link ><Link to="/"><button className="btn btn-primary">{login.name}</button></Link></Nav.Link> : <Nav.Link><Link to="/login"><button onClick={() => setLogin(login)} className="btn btn-primary btn-container">Login</button></Link></Nav.Link>
                        }

                        <Nav.Link> <button className="btn btn-primary " onClick={() => setLogin({})}>Sign out</button></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </>

    );
};

export default Header;