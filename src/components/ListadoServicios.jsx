import React from 'react';
import { Table } from 'react-bootstrap';

const ListadoServicios = () => {
    // Aquí puedes obtener los datos de los servicios desde tu fuente de datos (API, base de datos, etc.)
    const servicios = [
        {
            id: 1,
            servicio: 'Servicio 1',
            descripcion: 'Descripción del servicio 1',
            precio: 100,
        },
        {
            id: 2,
            servicio: 'Servicio 2',
            descripcion: 'Descripción del servicio 2',
            precio: 200,
        },
        // Agrega más servicios según tus necesidades
    ];

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Servicio</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {servicios.map((servicio) => (
                    <tr key={servicio.id}>
                        <td>{servicio.id}</td>
                        <td>{servicio.servicio}</td>
                        <td>{servicio.descripcion}</td>
                        <td>{servicio.precio}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ListadoServicios;