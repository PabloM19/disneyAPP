// src/components/CharacterList.tsx
import React, { useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCaracters";
import { Container, Row, Col, Spinner, Alert, Card } from "react-bootstrap";
import "../styles/Characters.css";

export const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1);
  const pageSize = 9; // Limitar a 9 personajes por página
  const { characters, loading, error } = useFetchCharacters(page, pageSize);

  return (
    <Container className='py-5'>
      <Row>
        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">{error}</Alert>}
        {!loading &&
          !error &&
          characters.map((character) => (
            <Col key={character._id} xs={12} md={4} className="mb-4"> {/* 3 columnas por fila */}
              <Card className="character-card">
                <Card.Img variant="top" src={character.imageUrl} alt={character.name} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>Films: {character.films.join(", ")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-between">
          <button
            className="btn btn-secondary"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Pag. Anterior
          </button>
          <button className="btn btn-secondary" onClick={() => setPage((prev) => prev + 1)}>
            Pag. Siguiente
          </button>
        </Col>
      </Row>
    </Container>
  );
};
