import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pet } from "./Pet";
import { PetsApi } from "../../services/pets-api";

export const PetsList = () => {
  const [pets, setPets] = useState();
  const { state } = useLocation();

  const fetchPets = async () => {
    // fetch pets from api
    const allPets = await PetsApi.all();

    // save fetched pets to local state
    setPets(allPets);
  };

  const addPet = (pet) => {
    setPets((prevState) => [...prevState, pet]);
  };

  const deletePet = async (petId) => {
    try {
      const { deletedPetId } = await PetsApi.delete(petId);
      console.log({deletedPetId});
      setPets((prevState) => prevState.filter((pet) => pet.id !== petId));
      
    } catch (e) {
      console.error(e);
    }
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

  //console.log(pets);

  return pets.map((pet) => (
    <Pet
      key={pet.id}
      petId={pet.id}
      pet={pet}
      onDelete={() => {
        deletePet(pet.id);
      }}
    />
  ));
};
