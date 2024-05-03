import React from 'react';
import { Nav } from 'react-bootstrap';

const MenuLateral = ({ seccion, onSubseccionClick }) => {
    return (
        <Nav className="flex-column">
            {seccion === 'Equipos' && (
                <>
                    <Nav.Link onClick={() => onSubseccionClick('Registro')}>Registro</Nav.Link>
                    <Nav.Link onClick={() => onSubseccionClick('Listado')}>Listado</Nav.Link>
                </>
            )}
            {seccion === 'Clientes' && (
                <>
                    <Nav.Link onClick={() => onSubseccionClick('Registro')}>Registro</Nav.Link>
                    <Nav.Link onClick={() => onSubseccionClick('Listado')}>Listado</Nav.Link>
                </>
            )}
            {seccion === 'Servicios' && (
                <>
                    <Nav.Link onClick={() => onSubseccionClick('Registro')}>Registro</Nav.Link>
                    <Nav.Link onClick={() => onSubseccionClick('Listado')}>Listado</Nav.Link>
                </>
            )}
        </Nav>
    );
};

export default MenuLateral;