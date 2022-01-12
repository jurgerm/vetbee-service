import './App.css';

import { Route, Routes, Router, Switch } from "react-router-dom";
import { Nav } from "./organisms/Navbar";
import { Container } from "react-bulma-components";
import { Pets } from "./pages/Pets";
import { AddPet } from "./pages/AddPet";

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <Container className="mt-4">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
              <Pets />
          }
        />
        <Route path="/medications" element={
          <div>
            <AddPet />
          </div>
        } />
      </Routes>
    </Container>
  );
}

export default App;

