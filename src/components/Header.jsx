import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png'; // Importa la imagen desde la carpeta de assets

const Header = ({ usuario }) => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />{' '}
                    Registro Servicio
                </Navbar.Brand>
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