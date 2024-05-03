import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light mt-auto py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                        &copy; {new Date().getFullYear()} Registro Servicio. Todos los derechos reservados.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;