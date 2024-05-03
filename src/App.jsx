import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import MenuSuperior from './components/MenuSuperior';
import MenuLateral from './components/MenuLateral';
import Contenido from './components/Contenido';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const usuario = 'John Doe';
  const [seccionActual, setSeccionActual] = useState('');
  const [subseccionActual, setSubseccionActual] = useState('');

  const handleSeccionClick = (seccion) => {
    setSeccionActual(seccion);
    setSubseccionActual('Registro'); // Establecer la subsección predeterminada al cambiar de sección
  };

  const handleSubseccionClick = (subseccion) => {
    setSubseccionActual(subseccion);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header usuario={usuario} />
      <MenuSuperior onSeccionClick={handleSeccionClick} />
      <Container fluid className="flex-grow-1">
        <Row>
          <Col md={2} className="bg-light pt-3">
            <h5 className="text-center">{seccionActual}</h5>
            <MenuLateral seccion={seccionActual} onSubseccionClick={handleSubseccionClick} />
          </Col>
          <Col md={10}>
            <Contenido seccion={seccionActual} subseccion={subseccionActual} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;