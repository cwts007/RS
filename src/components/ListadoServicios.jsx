import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { connectToDatabase } from '../database';

const ListadoServicios = () => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const obtenerServicios = async () => {
            try {
                const db = await connectToDatabase();
                const collection = db.collection('servicios');
                const serviciosDB = await collection.find({}).toArray();
                setServicios(serviciosDB);
            } catch (error) {
                console.error('Error al obtener los servicios desde la base de datos:', error);
            }
        };

        obtenerServicios();
    }, []);

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
                    <tr key={servicio._id}>
                        <td>{servicio._id}</td>
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