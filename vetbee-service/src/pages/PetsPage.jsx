
import { Heading, Button } from "react-bulma-components";
import { PetsList } from "./PetsList";


function PetsPage() {
  return (
    <section>

      <Heading >
        Pets List
        <Button is-pulled-right >
          Add Pet
        </Button>

        <Button>
          Add Log
        </Button>
      </Heading>

      <PetsList />

    </section>
  );
};

export default PetsPage;
