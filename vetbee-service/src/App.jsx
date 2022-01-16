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


function App() {
  return (
    <Container className="mt-4">
      <Nav />

      <Routes>
        <Route exact path="/" element={
          <PetsPage />
        } />

        <Route path="/petsadd" element={
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

      </Routes>

      <VetBeeFooter />

    </Container>

  );
}

export default App;

