import { Navbar, Menu, Buttons } from "react-bulma-components";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

import logo from "../assets/vetbee.png";

export const Nav = () => {
    return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item href="#">
          <img
            alt="vetbee"
            src={logo}
            width="112"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item href="/">
              Pets
          </Navbar.Item>
          
          <Navbar.Item href="/medications">
            Medications
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
