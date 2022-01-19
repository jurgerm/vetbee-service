import { Route, Routes } from "react-router-dom";

import { Nav } from "./organisms/Navbar";
import { VetBeeFooter } from "./organisms/VetBeeFooter.jsx";

import { Container } from "react-bulma-components";

import PetsPage from "./pages/PetsPage";
import AddPet from "./pages/AddPet";

import 'typeface-roboto';
import './App.scss';

import LogsPage from "./pages/LogsPage";
import LogsAddPage from "./pages/LogsAddPage.jsx";

import MedicationsPage from "./pages/MedicationsPage";
import MedicationsAddPage from "./pages/MedicationsAddPage";

import { useState } from "react";
import { createContext } from "react";





function App() {
  const PetContext = createContext();
  const [gyvunas, setGyvunas] = useState();
  return (
    <PetContext.Provider value={{ gyvunas, setGyvunas }}>
      <Container className="mt-4">
        <Nav />

        <Routes>

          <Route exact path="/" element={
            <PetsPage />
          } />

          <Route exact path="/pets" element={
            <PetsPage />
          } />

          <Route path="/pets/add" element={
            <AddPet />
          } />

          <Route path="/logs/add/:petId"
            element={
              <LogsAddPage />
            }
          />

          <Route path="/logs/:petId"
            element={
              <LogsPage />
            }
          />

          <Route path="/medications/add"
            element={
              <MedicationsAddPage />
            }
          />

          <Route path="/medications"
            element={
              <MedicationsPage />
            }
          />



        </Routes>

        <VetBeeFooter />

      </Container>

    </PetContext.Provider>
  );
}

export default App;

