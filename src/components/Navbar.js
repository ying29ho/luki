import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import logo from "../logo.png";
import luki from "../luki1.png";

export const DesktopNavbar = () => {
  return (
    <Navbar className="justify-content-center" style={{ backgroundColor: "#FFC300" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="luki logo"
            src={luki}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end" style={{fontWeight: 700, fontSize: "25px"}}>
          <Nav.Link href="/">Adopt</Nav.Link>
          <Nav.Link href="/breed">Breed</Nav.Link>
          <Nav.Link href="/sit">Dog Sit</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
