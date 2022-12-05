import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import "./formQueixoso.css";

function Queixoso() {
  return (
    <>
      <Row>
        <div className='col-sm-8 queixoso-dados'>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite o seu nome" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridApelido">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" placeholder="Sobrenome" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridBairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridRua">
              <Form.Label>Rua</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado Civil</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Solteiro(a)</option>
                  <option>Casado(a)</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>BI</Form.Label>
                <Form.Control placeholder='1234567LA023' />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control type="date" placeholder='1234567LA023' />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="radio"
              label="Masculino"
              name="formHorizontalRadios"
              id="formVerticalRadios1"
            />
            <Form.Check
              type="radio"
              label="Feminino"
              name="formHorizontalRadios"
              id="formVerticalRadios2"
            />
            </Form.Group>
            <Button variant="light" type="button" className='btn-cancelar-1'>
           Cancelar
            </Button>
            <Button variant="dark" type="button" className='btn-proximo-1'>
            Próximo
            </Button>
          </Form>
        </div>
      </Row>
    </>
  );
}

export default Queixoso;