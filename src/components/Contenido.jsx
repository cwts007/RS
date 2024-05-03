import React from 'react';
import { Container } from 'react-bootstrap';
import FormularioEquipos from './FormularioEquipos';
import ListadoEquipos from './ListadoEquipos';
import FormularioClientes from './FormularioClientes';
import ListadoClientes from './ListadoClientes';
import FormularioServicios from './FormularioServicios';
import ListadoServicios from './ListadoServicios';

const Contenido = ({ seccion, subseccion }) => {
    const renderContenido = () => {
        switch (seccion) {
            case 'Equipos':
                return subseccion === 'Registro' ? <FormularioEquipos /> : <ListadoEquipos />;
            case 'Clientes':
                return subseccion === 'Registro' ? <FormularioClientes /> : <ListadoClientes />;
            case 'Servicios':
                return subseccion === 'Registro' ? <FormularioServicios /> : <ListadoServicios />;
            default:
                return null;
        }
    };

    return (
        <Container fluid className="p-4">
            <h1>{seccion}</h1>
            {renderContenido()}
        </Container>
    );
};

export default Contenido;