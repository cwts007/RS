import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormularioServicios = () => {
    const [servicio, setServicio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar los datos del formulario
        console.log('Datos del formulario de servicios:', {
            servicio,
            descripcion,
            precio,
        });
        // Limpiar los campos del formulario después de enviar los datos
        setServicio('');
        setDescripcion('');
        setPrecio('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="servicio">
                <Form.Label>Servicio</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el servicio"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ingrese la descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="precio">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Ingrese el precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
                Registrar Servicio
            </Button>
        </Form>
    );
};

export default FormularioServicios;