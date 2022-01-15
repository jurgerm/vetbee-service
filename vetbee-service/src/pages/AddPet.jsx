import { PetsApi } from "../services/pets-api";
import { PetForm } from "../components/PetForm";
import { Card, CardContent, CardFooter, CardFooterItem, Content } from "../ui/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 const AddPet = ({ className }) => {
  const pet = { name: "", dob: "", client_email: "" };
  const [model, setModel] = useState(pet);
  const onModelUpdate = (update) => setModel(update);
  const navigate = useNavigate();
  const onSave = async () => {
    const res = await PetsApi.add(model);
    if (res.errors) return console.warn("Bad payload");
    navigate("/", { state: { added: res } });
  };

  return (
    <Card>
      <CardContent>
        <Content>
          <PetForm className={className} pet={pet} onUpdate={onModelUpdate} />
        </Content>
      </CardContent>

      <CardFooter>
        <CardFooterItem as="a" onClick={onSave}>
          Save
        </CardFooterItem>
      </CardFooter>
    </Card>
  );
};

export default AddPet;