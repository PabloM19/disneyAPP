// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import { Login } from "./components/Login";
import { CharacterList } from "./components/CharacterList";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Container className="my-5">
                <Routes>
                  <Route path="/characters" element={<CharacterList />} />
                </Routes>
              </Container>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};
