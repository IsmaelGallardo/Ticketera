import React from 'react';
import '../../css/bootstrap.min.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">La Riquetera</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Cartelera</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Preguntas frecuentes
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;


// import React from "react"
// import "../../css/bootstrap.min.css" 
// import "./NavBar.css"
// import foto from '../../img/circle-user.svg'

// // ---> NAVBAR
// const NavBar = () => {
//     return(
//         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div class="container-fluid">
//                 <a class="navbar-brand text-light" href="./index.html">Multicolor Ink</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
//                     aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
//                     <ul class="navbar-nav">
//                         <li class="nav-item">
//                             <a class="nav-link active text-light" aria-current="page" href="./index.html">Inicio</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link text-light" href="./tienda.html">Tienda</a>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
//                                 aria-expanded="false">Categorias</a>
//                             <ul class="dropdown-menu bg-dark">
//                                 <li><a class="dropdown-item text-light" href="#">CARTUCHOS</a></li>
//                                 <li><a class="dropdown-item text-light" href="#">PIGMENTOS</a></li>
//                                 <li><a class="dropdown-item text-light" href="#">PEN</a></li>
//                             </ul>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link text-light" href="./quienes-somos.html">¿Quienes somos?</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link text-light" href="./contacto.html">Contacto</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="btn btn-secondary" href="./inicio-sesion.html" role="button">
//                                 <span class="iconAuthContainer" >
//                                     <img src={foto} alt="icono de usuario"/>
//                                 </span>Iniciar sesion
//                             </a>
//                         </li>

//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;