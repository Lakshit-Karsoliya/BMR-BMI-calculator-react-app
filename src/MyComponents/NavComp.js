import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function NavComp() {
    return (
        <div>
            
            <Navbar className="d-flex justify-content-between" bg='dark' variant='dark'>
                <Navbar.Brand href='#home'>Convertor</Navbar.Brand>
                <Nav>
                    <Nav.Item><Nav.Link href='#'><Link  className="nav-link" to="/">Home</Link></Nav.Link></Nav.Item>
                    {/*<Nav.Item><Nav.Link href='#'>Contact</Nav.Link></Nav.Item>*/}
                    <Nav.Item><Nav.Link to="/"><Link className="nav-link" to="/about">AboutUs</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link  className="nav-link" href="https://github.com/Lakshit-Karsoliya">Work</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
  
        </div>
    )
}
