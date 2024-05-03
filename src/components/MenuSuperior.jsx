import React from 'react';
import { Nav } from 'react-bootstrap';

const MenuSuperior = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/equipos">Equipos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/clientes">Clientes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/servicios">Servicios</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default MenuSuperior;