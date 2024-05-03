import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({ usuario }) => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Registro Servicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Navbar.Text>
                        Usuario: {usuario}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;