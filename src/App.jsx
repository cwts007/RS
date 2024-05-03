import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import MenuSuperior from './components/MenuSuperior';
import MenuLateral from './components/MenuLateral';
import Contenido from './components/Contenido';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const usuario = 'John Doe';

  return (
    <div>
      <Header usuario={usuario} />
      <MenuSuperior />
      <Container fluid className="mt-5">
        <Row>
          <Col md={3} className="bg-light pt-3">
            <MenuLateral />
          </Col>
          <Col md={9}>
            <Contenido />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;