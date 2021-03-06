import { Card, Button, Heading, Level } from "react-bulma-components";

import { PetsApi } from "../services/pets-api";
import { PetForm } from "../components/pets/PetForm";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPet = ({ className }) => {
  const pet = { name: "", dob: "", client_email: "" };
  const [model, setModel] = useState(pet);
  const onModelUpdate = (update) => setModel(update);
  const navigate = useNavigate();
  const onSave = async () => {
    const res = await PetsApi.add(model);
    if (res.errors) {
      return console.warn("Bad payload", res.errors);
    }
    //navigate("/pets", { state: { added: res } });
    console.log(res);
    navigate("/pets");
  };

  return (
    <section>

      <Level>
        <Level.Side align="left">
          <Heading >
            Add Pet
          </Heading>
        </Level.Side>
      </Level>

      <Card>
        <Card.Content>
          <PetForm
            className={className}
            pet={pet}
            onUpdate={onModelUpdate}
          />
        </Card.Content>

        <Card.Footer>
          <Card.Footer.Item >
            <Button as="a" onClick={onSave}>
              Save
            </Button>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>

    </section>
  );
};

export default AddPet;