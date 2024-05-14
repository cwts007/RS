import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connectToDatabase } from '../database';

const FormularioClientes = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const db = await connectToDatabase();
            const collection = db.collection('clientes');

            const nuevoCliente = {
                nombre,
                email,
                telefono,
                direccion,
            };

            await collection.insertOne(nuevoCliente);
            console.log('Cliente guardado en la base de datos');

            // Limpiar los campos del formulario después de enviar los datos
            setNombre('');
            setEmail('');
            setTelefono('');
            setDireccion('');
        } catch (error) {
            console.error('Error al guardar el cliente en la base de datos:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingrese el email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder="Ingrese el teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="direccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese la dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
                Registrar Cliente
            </Button>
        </Form>
    );
};

export default FormularioClientes;