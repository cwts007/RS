import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { connectToDatabase } from '../database';

const ListadoClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const obtenerClientes = async () => {
            try {
                const db = await connectToDatabase();
                const collection = db.collection('clientes');
                const clientesDB = await collection.find({}).toArray();
                setClientes(clientesDB);
            } catch (error) {
                console.error('Error al obtener los clientes desde la base de datos:', error);
            }
        };

        obtenerClientes();
    }, []);

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
                    <tr key={cliente._id}>
                        <td>{cliente._id}</td>
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