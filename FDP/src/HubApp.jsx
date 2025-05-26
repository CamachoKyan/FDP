import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './layouts/Header.jsx'
import { Footer } from './layouts/Footer.jsx'
import './index.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*import ListGroup from 'react-bootstrap/ListGroup';
import ListaEjercicios from './Tests/Testeo.jsx';
*/



export function HubApp(){
    return(
    <>
        <Header />
      <Container className='App'>
       
        <Row>
          <h1>Fundamentos De Programación</h1>
          <Col md={6} className='text-section'>
            <div className="problem-details">
          <h2>Ejercicio #1</h2>
      
          <p>
           Descripción:
           Pedir el radio de un círculo y calcular su área usar una funcion para calcular el Area En hacerlo en java
          </p>
      
          <h3>Pasos A Ejecutar:</h3>
          <ol>
            <li>Introducir El Radio</li>
            
          </ol>
        </div>
          </Col>
          <Col md={6} className='iframe-container'>
            <iframe
  src="https://www.onlinegdb.com/embed/2bQsMbbM6?theme=dark"
  width="100%"
  height="400"
  style={{ border: 'none' }}
  title="OnlineGDB"
/>

          </Col>
        </Row>

      
       



      </Container>




    </>
    )
}
    

/*
export function HubApp(){
    return(
    <>
        <ListaEjercicios />


    </>
    )
}

*/ 