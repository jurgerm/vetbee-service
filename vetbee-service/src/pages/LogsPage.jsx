import { Link, useParams, useLocation } from "react-router-dom";
import { Heading, Button, Level } from "react-bulma-components";
import { LogsList } from "../components/logs/LogsList";

export const LogsPage = (props) => {

  let { petId } = useParams();
  console.log({ petId });

  let location = useLocation();
  console.log({ location });
  console.log(location.state);

  let petName = '';
  if (location.state != null) {
    petName = location.state.petName;
  }
  
  return (
    <section>

      <Level>
        <Level.Side align="left">
          <Heading >
            {petName}: Health Records
          </Heading>
        </Level.Side>
        <Level.Side align="right">

          <Link to={{ pathname: `/logs/add/${petId}` }}
            state={{ petName: petName }}
          >
            <Button color="primary">
              Add Log
            </Button>
          </Link>

        </Level.Side>
      </Level>


      <div className="columns is-multiline">
        <LogsList
          petId={petId}
        />
      </div>

    </section>
  );
};

export default LogsPage;
