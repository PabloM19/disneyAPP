import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../../assets/logo2.png';

export const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container  style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        <img src={logo}/>
      </Container>
    </Navbar>
  );
};
