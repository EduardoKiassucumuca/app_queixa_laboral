
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <header className="mb-auto">
    <div>
      <h3 className="float-md-start mb-0 logotipo-igt">IGT <span className='my-logo-igt'>| Queixa Laboral</span></h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <a className="nav-link active home-igt" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Serviços</a>
        <a className="nav-link" href="#">Entrar</a>
      </nav>
    </div>
  </header>
  );
}

export default Menu;