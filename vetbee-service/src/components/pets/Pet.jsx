import { useState } from "react";
import { Button, Card } from "react-bulma-components";

import { Link } from "react-router-dom";

export const Pet = ({ petId, pet, onDelete, onUpdate }) => {
  const { name, dob, client_email } = pet;
  const [model, setModel] = useState({ name, dob, client_email });

  return (
    <div className="column is-4-desktop is-half-tablet">
      <Card>
        <Card.Header>
          <Card.Header.Title>
            {name}
          </Card.Header.Title>
        </Card.Header>

        <Card.Content>
          <div className="attribute-dob">
            {dob}
          </div>
          <div className="attribute-client_email">
            {client_email}
          </div>
        </Card.Content>

        <Card.Footer>
          <Card.Footer.Item>
            <Link to={{ pathname: `/logs/${petId}` }}
              state={{ petName: name }}
            >
              <Button color="primary">
                View Log
              </Button>
            </Link>

            <Button onClick={onDelete}>
              Delete
            </Button>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </div >
  );
};
