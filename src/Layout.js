import { DesktopNavbar, MobileNavbar, NewNav } from "../src/components/Navbar";
import App from "./App";
import MediaQuery from "react-responsive";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <MediaQuery maxWidth={900}>
        <MobileNavbar />
      </MediaQuery>
      <MediaQuery minWidth={901}>
        <DesktopNavbar />
      </MediaQuery> */}
<NewNav/>
      <div>{children}</div>
      {/* <Footer/>÷\ */}
    </div>
  );
};

export default Layout;
