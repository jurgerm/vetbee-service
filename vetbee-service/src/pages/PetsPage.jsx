import { Heading, Button, Level } from "react-bulma-components";
import { PetsList } from "../components/pets/PetsList";
import { Link } from 'react-router-dom';


function PetsPage() {
  return (
    <section>

      <Level>
        <Level.Side align="left">
          <Heading >
            Pets List
          </Heading>
        </Level.Side>
        <Level.Side align="right">
          <Link to="/#petsadd">
            <Button color="primary">
              Add Pet
            </Button>
          </Link>

        </Level.Side>
      </Level>

      <div className="columns is-multiline">
        <PetsList />
      </div>

    </section>
  );
};

export default PetsPage;
