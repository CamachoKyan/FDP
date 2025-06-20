import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export function Header() {
  return (
    <>
    <Navbar bg="dark" navbar navbar-expand-lg fixed-top>
      <Container fluid>
        {}
        <Navbar.Brand href="/FDP" className='ms-lg-2 fs-4 fw-bold'>
           <img
              alt="Logo"
              src="./Lince.png"
              width="38"
              height="38"
              className="d-inline-block align-top"
            /><span
          className="ms-lg-2 ms-md-2 ms-sm-2 ms-xs-2 text-light">Kyan Camacho</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );
}
