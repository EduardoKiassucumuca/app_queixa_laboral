
import './footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
        <footer class="py-5 igt-footer">
            <Row>
                {Array.from({length:2}).map((_, igt_footer)=>(
                <Col md={3}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>  
                </Col>
            ))}
            <Col md={5}>
            <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                    <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
                </form>
                </Col>
        </Row>
        </footer>
  );
}

export default Footer;