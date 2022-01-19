import { Heading, Button, Level } from "react-bulma-components";
import { MedicationsList } from "../components/medications/MedicationsList";
import { Link } from 'react-router-dom';


function MedicationsPage() {
  return (
    <section>

      <Level>
        <Level.Side align="left">
          <Heading >
            Medications List
          </Heading>
        </Level.Side>
        <Level.Side align="right">
          <Link to="/medications/add">
            <Button color="primary">
              Add Medication
            </Button>
          </Link>

        </Level.Side>
      </Level>

      <div className="columns is-multiline">
        <MedicationsList />
      </div>

    </section>
  );
};

export default MedicationsPage;
