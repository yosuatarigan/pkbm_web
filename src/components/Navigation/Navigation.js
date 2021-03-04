import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
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


const Navigation = ({history,match}) => {

    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  
    return (
        <div className="fixed-top">
        <Navbar color=" bg-blue text-muted " light expand="md">
          <NavbarBrand onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              history.push(`${match.url}`)
              
            }, 1000);
          })}><h6 className="white">PKBM Hanuba</h6></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto white " navbar>
            <NavItem>
              <NavLink onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              history.push(`${match.url}alumni`)
              toggle();
            }, 1000);
          })} ><h6 className="white">Alumni</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              history.push(`${match.url}tutor`)
              toggle();
            }, 1000);
          })} ><h6 className="white">Tutor</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              history.push(`${match.url}fasilitas`)
              toggle();
            }, 1000);
          })}><h6 className="white">Fasilitas</h6></NavLink>
              </NavItem>   
              <NavItem>
                <NavLink onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              history.push(`${match.url}galeri`)
              toggle();
            }, 1000);
          })}><h6 className="white">Galeri</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              history.push(`${match.url}pendaftaran`)
              toggle();
            }, 1000);
          })}><h6 className="white">Pendaftaran</h6></NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              history.push(`${match.url}article`)
              toggle();
            }, 1000);
          })}><h6 className="white">Article</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://setara.kemdikbud.go.id/" target="_blank"><h6 className="white">Setara Daring</h6></NavLink>
              </NavItem>           
              <NavItem>
                <NavLink href="https://wa.me/62821-5091-5781" target="_blank"><h6 className="white">Hubungi Kami</h6></NavLink>
              </NavItem>  
            </Nav>

            <NavbarText className="pr3" onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              toggle();
              history.push(`${match.url}admin`)
              
            }, 1000);
          })}><h6 className="white">Admin</h6></NavbarText>

            <NavbarText onClick={()=> new Promise((resolve) => {
            setTimeout(() => {
              toggle();
              history.push(`${match.url}info`)
              
            }, 1000);
          })}><h6 className="white">Info</h6></NavbarText>
          </Collapse>
        </Navbar>

       
      </div>


    );
}

export default withRouter(Navigation);

