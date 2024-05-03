import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormularioEquipos = () => {
    const [equipo, setEquipo] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [numeroSerie, setNumeroSerie] = useState('');
    const [cliente, setCliente] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar los datos del formulario
        console.log('Datos del formulario de equipos:', {
            equipo,
            marca,
            modelo,
            numeroSerie,
            cliente,
            ubicacion,
        });
        // Limpiar los campos del formulario después de enviar los datos
        setEquipo('');
        setMarca('');
        setModelo('');
        setNumeroSerie('');
        setCliente('');
        setUbicacion('');
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

export default FormularioEquipos;