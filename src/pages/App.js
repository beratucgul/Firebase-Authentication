import React from "react";
import { Container } from "react-bootstrap";
import RoutesComponent from "../routes/Routes";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <RoutesComponent />
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
