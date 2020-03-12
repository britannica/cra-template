import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button,
  NavItem,
  NavLink as NavbarLink,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../constants';

const Header = ({ className }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <Navbar color="dark" dark className={className} expand="md">
      <Container>
        <NavbarBrand tag={Link} to={Routes.HOME.toLink()}>Britannica App</NavbarBrand>
        <NavbarToggler onClick={() => setIsCollapseOpen(!isCollapseOpen)} />
        <Collapse isOpen={isCollapseOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavbarLink tag={NavLink} to={Routes.HOME.toLink()}>Nav Link</NavbarLink>
            </NavItem>
            <NavItem>
              <Button tag={Link} to={Routes.HOME.toLink()} color="primary">Nav Button</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: null,
};

export default Header;
