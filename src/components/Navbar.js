import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import luki from "../luki1.png";



export const NewNav=()=>{
  return(
    <Navbar collapseOnSelect expand="lg"className="justify-content-center" style={{ backgroundColor: "#FFC300" }}>
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end" style={{fontWeight: 700, fontSize: "25px"}}>
          <Nav.Link href="/adopt">Adopt</Nav.Link>
          <Nav.Link href="/breed">Breed</Nav.Link>
          <Nav.Link href="/sit">Dog Sit</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
// export const DesktopNavbar = () => {
//   return (
//     <Navbar className="justify-content-center" style={{ backgroundColor: "#FFC300" }}>
//       <Container>
//         <Navbar.Brand href="/">
//           <img
//             alt="luki logo"
//             src={luki}
//             width="100"
//             height="100"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>
//         <Nav className="justify-content-end" style={{fontWeight: 700, fontSize: "25px"}}>
//           <Nav.Link href="/adopt">Adopt</Nav.Link>
//           <Nav.Link href="/breed">Breed</Nav.Link>
//           <Nav.Link href="/sit">Dog Sit</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };


// export const MobileNavbar = () => {
//   const [open, setOpen] = useState(false);

//   const hamburgerIcon = (
//     <CgMenu
//       className="hamburger"
//       size="60px"
//       color="#FF4400"
//       onClick={() => setOpen(!open)}
//     />
//   );

//   const closeIcon = (
//     <CgClose
//       className="hamburger"
//       size="60px"
//       color="#FF4400"
//       onClick={() => setOpen(!open)}
//     />
//   );

//   const closeMobileMenu =()=> setOpen(false);

//   return (
//     <Navbar className="mobile-navigationr" style={{ backgroundColor: "#FFC300", padding: "10px" }}>
//       <Container>
//         <Navbar.Brand href="/">
//           <img
//             alt="luki logo"
//             src={luki}
//             width="60"
//             height="60"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>

//       {open ? closeIcon : hamburgerIcon}
//       {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
//       </Container>
//     </Navbar>
//   );
// };
