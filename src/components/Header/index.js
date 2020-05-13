import React, { useState } from 'react';
import './header.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Button
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar"  light expand="md">
        <NavbarBrand href="/" className="text-white">Dashboard</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#" className="text-white">Usuarios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white">Configurações</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>   
            </UncontrolledDropdown>
          </Nav>
          <Button id="sair">Sair</Button>{' '}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;