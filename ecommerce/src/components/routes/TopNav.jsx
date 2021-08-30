import React from "react"
import { Nav, Navbar, Container, Form, FormControl, } from "react-bootstrap"

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { NavLink } from 'react-bootstrap';
export const TopNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"
                bg="black"
                variant="dark"
                className="main_nav"
            >
                <Container>
                    <Navbar.Brand href="#home">F-Zone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <NavLink to="/                                                    ">Home</NavLink>
                            <NavLink to="/products">Products</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/cart">Cart</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};