import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="black bg-washed-green" light expand="md">
          <NavbarBrand href='/pkbm' >PKBM HANUBA</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink >Alumni</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  >Tutor</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Fasilitas</NavLink>
              </NavItem>              
            </Nav>
            <NavbarText className="pr3" >Admin</NavbarText>
            <NavbarText >Info</NavbarText>
          </Collapse>
        </Navbar>
      </div>


    );
}

export default Navigation;

