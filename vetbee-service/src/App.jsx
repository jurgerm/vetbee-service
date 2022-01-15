import './App.css';

import { Route, Routes } from "react-router-dom";
import { Nav } from "./organisms/Navbar";
import { Container } from "react-bulma-components";
import  PetsPage  from "./pages/PetsPage";
import AddPet  from "./pages/AddPet";

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <Container className="mt-4">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <PetsPage />
          }
        />
        <Route path="/medications" element={
          <AddPet />

        } />
      </Routes>
    </Container>
  );
}

export default App;

