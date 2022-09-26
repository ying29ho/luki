import { DesktopNavbar } from "../src/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <DesktopNavbar />
      <div>{children}</div>
      {/* <Footer/>÷\ */}
    </div>
  );
};

export default Layout;