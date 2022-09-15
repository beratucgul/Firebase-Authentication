import React from "react";
import RoutesComponent from "../routes/Routes";
import { AuthProvider } from "../context/AuthContext";
import CenteredContainer from "./authentication/CenteredContainer";

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;
