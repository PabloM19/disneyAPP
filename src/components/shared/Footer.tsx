import React from "react";
import { Container } from "react-bootstrap";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <span>Todos los derechos reservados. 2024.</span>
      </Container>
    </footer>
  );
};
