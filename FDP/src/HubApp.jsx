import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Layouts/Header.jsx';
import { Footer } from './Layouts/Footer.jsx';
import './index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const USER = "CamachoKyan";
const REPO = "FDP";

export function HubApp() {
  const { Folder } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/${USER}/${REPO}/main/Ejercicios/${Folder}/data.json`
        );
        const data = await response.json();
        setInfo(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar la información del ejercicio.");
      }
    };

    fetchInfo();
  }, [Folder]);

  if (error) return <p>{error}</p>;
  if (!info) return <p>Cargando información del ejercicio...</p>;

  return (
    <>
      <Header />
      <Container className='App'>
        <Row>
          <h1>Fundamentos De Programación</h1>
          <Col md={6} className='text-section'>
            <div className="problem-details">
              <h2>{Folder}</h2>
              <p>
                <strong>Descripción:</strong><br />
                {info.Description}
              </p>

              <h3>Pasos A Ejecutar:</h3>
              <ol>
                {info.Steps?.map((Step, index) => (
                  <li key={index}>{Step}</li>
                ))}
              </ol>
            </div>
          </Col>

          <Col md={6} className='iframe-container'>
            <iframe
              src={`https://www.onlinegdb.com/embed/${info.ogdbID}?theme=dark`}
              width="100%"
              height="400"
              style={{ border: 'none' }}
              title="OnlineGDB"
              allowFullScreen
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}