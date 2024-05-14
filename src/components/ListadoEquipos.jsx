import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { connectToDatabase } from '../database';

const ListadoEquipos = () => {
    const [equipos, setEquipos] = useState([]);

    useEffect(() => {
        const obtenerEquipos = async () => {
            try {
                const db = await connectToDatabase();
                const collection = db.collection('equipos');
                const equiposDB = await collection.find({}).toArray();
                setEquipos(equiposDB);
            } catch (error) {
                console.error('Error al obtener los equipos desde la base de datos:', error);
            }
        };

        obtenerEquipos();
    }, []);

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
                    <tr key={equipo._id}>
                        <td>{equipo._id}</td>
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