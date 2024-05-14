import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connectToDatabase } from '../database';

const FormularioEquipos = () => {
    const [equipo, setEquipo] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [numeroSerie, setNumeroSerie] = useState('');
    const [cliente, setCliente] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const db = await connectToDatabase();
            const collection = db.collection('equipos');

            const nuevoEquipo = {
                equipo,
                marca,
                modelo,
                numeroSerie,
                cliente,
                ubicacion,
            };

            await collection.insertOne(nuevoEquipo);
            console.log('Equipo guardado en la base de datos');

            // Limpiar los campos del formulario después de enviar los datos
            setEquipo('');
            setMarca('');
            setModelo('');
            setNumeroSerie('');
            setCliente('');
            setUbicacion('');
        } catch (error) {
            console.error('Error al guardar el equipo en la base de datos:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="equipo">
                <Form.Label>Equipo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el equipo"
                    value={equipo}
                    onChange={(e) => setEquipo(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="marca">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese la marca"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="modelo">
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el modelo"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="numeroSerie">
                <Form.Label>Número de Serie</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el número de serie"
                    value={numeroSerie}
                    onChange={(e) => setNumeroSerie(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="cliente">
                <Form.Label>Cliente</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el cliente"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="ubicacion">
                <Form.Label>Ubicación</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese la ubicación"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
                Registrar Equipo
            </Button>
        </Form>
    );
};

export default Formulario