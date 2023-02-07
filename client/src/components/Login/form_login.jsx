import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  return (
    <>
   
      <Row className='justify-content-md-center row-form'>
        <Col xs={6}>
        <h3 className='titulo-form'>Login |<span className='titulo-form-span'>Entre com os seus dados</span></h3>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
           
            <Button variant="warning" className='fw-bold btn-logar' type="submit">
                Iniciar-Sessão
            </Button>
            </Form>
    </Col>
    </Row>
 
    </>
  );
}

export default Login;