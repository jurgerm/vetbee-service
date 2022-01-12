import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pet } from "../components/Pet";
import { useAuth } from "../hooks/useAuth";
import { PetsApi } from "../services/pets-api";

export const Pets = () => {
  const [pets, setPets] = useState();
  const { state } = useLocation();
  const { token } = useAuth();

  const fetchPets = async () => {
    // fetch pets from api
    const p = await PetsApi.all(token);

    // save fetched pets to local state
    setPets(p);
  };

  const addPet = (pet) => {
    setPets((prevState) => [...prevState, pet]);
  };

  const deletePet = async (id) => {
    try {
      const { deletedPetId } = await PetsApi.delete(id);
      setPets((prevState) => prevState.filter((pet) => pet._id !== deletedPetId));
    } catch (e) {
      console.error(e);
    }
  };

  const updatePet = (id, update) => {
    setPets((prevState) =>
      prevState.map((pet) => {
        if (pet._id === id) return { ...pet, ...update };

        return pet;
      })
    );
  };

  // fetch pets list on component load
  useEffect(() => {
    fetchPets();
  }, []);

  // check if pet obj was added, if yes, save it to the array
  useEffect(() => {
    if (!state) return;

    if (state.added) {
      addPet(state.added);
    }
  }, [state]);

  if (!pets) {
    return <span>loading...</span>;
  }

  return pets.map((pet) => (
    <Pet
      key={pet._id}
      petId={pet._id}
      pet={pet}
      onDelete={() => {
        deletePet(pet._id);
      }}
      onUpdate={(update) => {
        updatePet(pet._id, update);
      }}
    />
  ));
};
