import React from 'react';
import { Container } from 'react-bootstrap';

const Contenido = () => {
    return (
        <Container fluid className="p-4">
            <h1>Contenido de la página</h1>
            {/* Aquí irá el contenido principal de la página */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel velit bibendum, vel bibendum velit consectetur. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.</p>
        </Container>
    );
};

export default Contenido;