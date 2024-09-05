// src/Login.tsx
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Login.css"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the credentials match
    if (email === "pablo" && password === "molero") {
      alert("¡Inicio de sesión correcto!");
      setError("");
      navigate("/characters");
    } else {
      setError("Credenciales inválidas, por favor vuelve a intentarlo.");
    }
  };

  return (
    <Container fluid className="p-0">
      <Row className="m-0 h-100">
        <Col
          xs={12}
          md={6}
          className="p-0 left-col d-flex justify-content-center align-items-center"
        >
          <div className="text-container">
            <h3 className="text-dark">Bienvenido de vuelta</h3>
            <h6 className="text-secondary">
              Introduce tus datos para iniciar sesión en tu cuenta
            </h6>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="text-secondary">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="mail@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="text-secondary">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="form-group">
                <button type="submit" className="btn btn-dark btn-block">
                  Iniciar sesión
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-block"
                  id="google"
                >
                  Iniciar con Google
                </button>
              </div>
            </form>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="p-0 right-col d-flex justify-content-center align-items-center"
        >
          <div className="text-container">
            <h3 className="text-white">¿No tienes cuenta?</h3>
            <h6 className="text-white">
              Rellena los datos para formar parte de nuestro equipo
            </h6>
            <form>
              <div className="form-group">
                <label className="text-white">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="mail@ejemplo.com"
                />
              </div>
              <div className="form-group">
                <label className="text-white">Contraseña</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-light btn-block">
                  Regístrate
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
