import React from 'react';
import { Nav } from 'react-bootstrap';

const MenuLateral = () => {
    return (
        <Nav className="flex-column">
            <Nav.Link href="/agregar">Agregar</Nav.Link>
            <Nav.Link href="/modificar">Modificar</Nav.Link>
            <Nav.Link href="/eliminar">Eliminar</Nav.Link>
        </Nav>
    );
};

export default MenuLateral;