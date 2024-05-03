import React from 'react';
import { Nav } from 'react-bootstrap';

const MenuSuperior = ({ onSeccionClick }) => {
    return (
        <Nav className="justify-content-center bg-light" activeKey="/home">
            <Nav.Item>
                <Nav.Link onClick={() => onSeccionClick('Equipos')}>Equipos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => onSeccionClick('Clientes')}>Clientes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => onSeccionClick('Servicios')}>Servicios</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default MenuSuperior;