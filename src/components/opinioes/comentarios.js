import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./comentarios.css";
import img_artigo from "../../img/lei_trabalho.jfif";
import { Image } from 'react-bootstrap';

function Opinioes() {
    return (
        <>
        <h1 className='txt-opinioes'>Como a plataforma ajudou você</h1>
        <Row className='opinioes'>
            {Array.from({length:3}).map((_, artigos)=>(
                <Col md={4}>
                   
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Opinioes;