import React from 'react';
import { Table } from 'react-bootstrap';

const ListadoClientes = () => {
    // Aquí puedes obtener los datos de los clientes desde tu fuente de datos (API, base de datos, etc.)
    const clientes = [
        {
            id: 1,
            nombre: 'Cliente 1',
            email: 'cliente1@example.com',
            telefono: '123456789',
            direccion: 'Dirección 1',
        },
        {
            id: 2,
            nombre: 'Cliente 2',
            email: 'cliente2@example.com',
            telefono: '987654321',
            direccion: 'Dirección 2',
        },
        // Agrega más clientes según tus necesidades
    ];

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.direccion}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ListadoClientes;