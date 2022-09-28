import Nav from "react-bootstrap/Nav";
import { motion } from "framer-motion";

export const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div className="mobile-navigation">
      <Nav>
        <ul>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <Nav.Link className="" href="/adopt">
              Adopt
            </Nav.Link>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <Nav.Link className="" href="/breed">
              Breed
            </Nav.Link>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <Nav.Link className="" href="/sit">
              Dog Sit
            </Nav.Link>
          </motion.li>
        </ul>
      </Nav>
    </div>
  );
};
