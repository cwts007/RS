import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light fixed-bottom">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        &copy; {new Date().getFullYear()} Registro Servicio. Todos los derechos reservados.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;