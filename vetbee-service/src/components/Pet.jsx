import { useState } from "react";
import { PetsApi } from "../services/pets-api";
import { PetForm } from "./PetForm";
import { Card, CardContent, CardFooter, CardFooterItem, Content } from "../ui/Card";

export const Pet = ({ petId, pet, onDelete, onUpdate }) => {
  const [saveEnabled, setSaveEnabled] = useState(false);
  const { name, dob, client_email } = pet;
  const [model, setModel] = useState({ name, dob, client_email });

  const toggleSaveEnabled = () => {
    setSaveEnabled(!saveEnabled);
  };

  const details = (
    <div className="details">
      <div className="fullname">
        Full name: {name} {dob} {client_email}
      </div>

      <PetForm
        pet={pet}
        disabled={!saveEnabled}
        onUpdate={(update) => {
          setModel(update);
        }}
      />
    </div>
  );

  return (
    <div className="mb-3">
      <Card>
        <CardContent>
          <Content>{details}</Content>
        </CardContent>

        <CardFooter>
          <CardFooterItem
            as={saveEnabled ? "a" : "span"}
            onClick={async () => {
              if (!saveEnabled) return;

              await PetsApi.update(petId, model);
              onUpdate(petId, model);
            }}
          >
            Save
          </CardFooterItem>
          <CardFooterItem as="a" onClick={toggleSaveEnabled}>
            Edit
          </CardFooterItem>
          <CardFooterItem as="a" onClick={onDelete}>
            Delete
          </CardFooterItem>
        </CardFooter>
      </Card>
    </div>
  );
};
