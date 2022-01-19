import { Card, Button, Heading, Level } from "react-bulma-components";

import { MedsApi } from "../services/meds-api";


import { MedicationForm } from "../components/medications/MedicationForm.jsx";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddMedication = ({ className }) => {
  const medication = {
    name: "",
    description: ""
  };
  const [model, setModel] = useState(medication);
  const onModelUpdate = (updatedMedication) => setModel(updatedMedication);
  const navigate = useNavigate();
  const onSave = async () => {
    const res = await MedsApi.add(model);
    if (res.errors) {
      return console.warn("Bad payload", res.errors);
    }
    navigate("/medications");
  };

  return (
    <section>
      <Level>
        <Level.Side align="left">
          <Heading >
            Add Medication
          </Heading>
        </Level.Side>
      </Level>
      <Card>
        <Card.Content>
          <MedicationForm
            className={className}
            medication={medication}
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

export default AddMedication;