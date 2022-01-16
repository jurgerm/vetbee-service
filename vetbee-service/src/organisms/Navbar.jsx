import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

import logo from "../assets/vetbee.png";

export const Nav = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item href="#">
          <img
            alt="vetbee"
            src={logo}
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item >
            <Link to="/pets">
              Pets
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/medications">
              Medications
            </Link>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
