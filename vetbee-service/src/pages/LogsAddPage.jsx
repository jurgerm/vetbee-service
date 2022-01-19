import { Card, Button, Heading, Level } from "react-bulma-components";

import { LogsApi } from "../services/logs-api";
import { LogForm } from "../components/logs/LogForm.jsx";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddLog = ({ className }) => {

  let { petId } = useParams();
  console.log({ petId });

  const log = {
    description: "",
    status: "",
    pet_id: petId
  };
  const [model, setModel] = useState(log);
  const onModelUpdate = (updatedLog) => setModel(updatedLog);
  const navigate = useNavigate();
  const onSave = async () => {
    const res = await LogsApi.add(model);
    if (res.errors) {
      return console.warn("Bad payload", res.errors);
    }
    navigate(`/logs/${petId}`);
  };

  return (
    <section>

      <Level>
        <Level.Side align="left">
          <Heading >
            Add Log
          </Heading>
        </Level.Side>
      </Level>

      <Card>
        <Card.Content>
          <LogForm
            className={className}
            log={log}
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

export default AddLog;