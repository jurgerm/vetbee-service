import { useState } from "react";
import { Button, Card } from "react-bulma-components";

export const Log = ({ logId, log, onDelete, onUpdate }) => {
  const { name, description } = log;
  const [model, setModel] = useState({ name, description });

  return (
    <div className="column is-4-desktop is-half-tablet">
      <Card>
        <Card.Header>
          <Card.Header.Title>
            {name}
          </Card.Header.Title>
        </Card.Header>

        <Card.Content>
          <div className="attribute-description">
            {description}
          </div>
        </Card.Content>

        <Card.Footer>
          <Card.Footer.Item>
            <Button onClick={onDelete}>
              Delete
            </Button>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </div >
  );
};
