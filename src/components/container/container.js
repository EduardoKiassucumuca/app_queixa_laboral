
import Container from 'react-bootstrap/Container';
import './container.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function CompnentMain() {
  return (
        <Container className='container container-lg" p-3 my-0 bg-dark text-white igt-container' fluid>
          <Row>
        
          <Col xs={6}>
    
            <h1>Plataforma de <span className='igt-nome-plataforma'>Queixas Laborais</span></h1>
            <p className='igt-conceito'>é um serviço feito pela IGT em todo continente nacional com o obejctivo</p>
            <p className='igt-conceito'>de resolver os conflitos existentes entre empregador e trabalhador.</p>
            <p className='igt-situacaoMain'>A IGT Tem poder para te ajudar nas seguintes situações:</p>
            <p className='igt-situacao'>Trabalhador sem salário ou remuneração</p>
            <p className='igt-situacao'>Dispedido injustamente</p>
            <p className='igt-situacao'>O trabalhador recusa prestar trabalho suplementar pedido pelo empregador</p>
            </Col>
            <Col xs={2} className='igt-queixa-aqui'>
              <p>Faça a sua queixa aqui</p>
              <p>--------------------------</p>
            </Col>
            <Col xs={4}>
            <h3>Quem tu pretendes queixar</h3>
            <Button variant="warning" className='btn-queixa-trabalhador'>Trabalhador</Button>
            <p className='igt-opt-queixa'>OU</p>
            <Link to="/queixoso"><Button variant="light">Empregador</Button></Link>
            <p></p>
            </Col>
          </Row>
        </Container>
      
  );
}

export default CompnentMain;