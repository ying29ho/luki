import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo.png";

export const DesktopNavbar = () => {
  return (
    <Navbar className="justify-content-center" style={{ backgroundColor: "#FFC300" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="luki logo"
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Adopt</Nav.Link>
          <Nav.Link href="/breed">Breed</Nav.Link>
          <Nav.Link href="/sit">Dog Sit</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
