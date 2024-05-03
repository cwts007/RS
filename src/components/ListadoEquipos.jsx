import React from 'react';
import { Table } from 'react-bootstrap';

const ListadoEquipos = () => {
    // Aquí puedes obtener los datos de los equipos desde tu fuente de datos (API, base de datos, etc.)
    const equipos = [
        {
            id: 1,
            equipo: 'Equipo 1',
            marca: 'Marca 1',
            modelo: 'Modelo 1',
            numeroSerie: 'NS-001',
            cliente: 'Cliente 1',
            ubicacion: 'Ubicación 1',
        },
        {
            id: 2,
            equipo: 'Equipo 2',
            marca: 'Marca 2',
            modelo: 'Modelo 2',
            numeroSerie: 'NS-002',
            cliente: 'Cliente 2',
            ubicacion: 'Ubicación 2',
        },
        // Agrega más equipos según tus necesidades
    ];

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Equipo</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Número de Serie</th>
                    <th>Cliente</th>
                    <th>Ubicación</th>
                </tr>
            </thead>
            <tbody>
                {equipos.map((equipo) => (
                    <tr key={equipo.id}>
                        <td>{equipo.id}</td>
                        <td>{equipo.equipo}</td>
                        <td>{equipo.marca}</td>
                        <td>{equipo.modelo}</td>
                        <td>{equipo.numeroSerie}</td>
                        <td>{equipo.cliente}</td>
                        <td>{equipo.ubicacion}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ListadoEquipos;