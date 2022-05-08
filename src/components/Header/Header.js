import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav >
                <div className='nav-logo'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        {
                            user && <>
                                <Link to="/manageItems">Manage Items</Link>
                                <Link to="/addItem">Add Item</Link>
                                <Link to="/myItems">My items</Link>
                            </>
                        }
                        {
                            user ?
                                <button className='signOut-btn' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Link to="/login" >Login</Link>
                        }
                        <Link to="/register" >Register</Link>
                    </div>
                </div>
            </nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='mx-auto navbar'>

                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/inventory">
                                <Nav.Link>Inventory</Nav.Link>
                            </LinkContainer>



                            <LinkContainer to="/blogs">
                                <Nav.Link>Blogs</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>




                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;