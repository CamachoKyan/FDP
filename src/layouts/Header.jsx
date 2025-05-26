import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export function Header() {
  return (
    <>
    <Navbar bg="dark" navbar navbar-expand-lg fixed-top>
      <Container fluid>
        {/* Logo y nombre a la izquierda */}
        <Navbar.Brand href="#home" className='ms-lg-2 fs-4 fw-bold'>
          <i class="bi bi-8-square-fill"></i>{' '}<span
          className="ms-lg-2 ms-md-2 ms-sm-2 ms-xs-2 text-light">Test</span>
        </Navbar.Brand>

        {/* Botón de colapso para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links a la derecha */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#inicio" className='fw-bold text-light'>Inicio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
