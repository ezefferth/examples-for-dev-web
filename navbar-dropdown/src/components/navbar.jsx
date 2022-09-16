
import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">Minha Aplicação</Navbar.Brand>
          {/* me-auto deixa os elementos para esquerda */}
          <Nav className="me-auto">
            {/* os href serial utilizado para ir para outras páginas da aplicação 
            caso esteja configurada as rotas da aplicação */}
            <Nav.Link href="">Página Principal</Nav.Link>
            <Nav.Link href="">Sobre nós</Nav.Link>
            <Nav.Link href="">Contato</Nav.Link>
          </Nav>

          {/* mr-auto deixa os elementos para direita */}
          <Nav className='mr-auto'>
            {/* em title vc coloca titulo do dropdown */}
            <NavDropdown title="Configurações" id="basic-nav-dropdown">
              <NavDropdown.Item href=''>Meus dados</NavDropdown.Item>
              <NavDropdown.Item href="">Contato</NavDropdown.Item>
              <NavDropdown.Item href="">Outra coisa...</NavDropdown.Item>
              {/* divider divide os elementos com a linha, separacao somente*/}
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Container>
      </Navbar>
    </>
  )
}
