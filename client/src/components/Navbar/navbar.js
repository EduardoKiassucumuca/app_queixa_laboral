
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <header className="mb-auto">
        <h3 className="float-md-start mb-0 logotipo-igt">IGT <span className='my-logo-igt'>| Queixa Laboral</span></h3>
        <nav className="nav nav-masthead justify-content-center float-md-end"  expand="lg">
          <a className="nav-link active home-igt" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">Sobre</a>
          <a className="nav-link" href="#">Noticias</a>
          <a className="nav-link" href="#">Eventos</a>
          <Link to="/Entrar"><li><a className="nav-link" href="#">Entrar</a></li></Link>
        </nav>
      </header>
    </div>
  );
}

export default Menu;