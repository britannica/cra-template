import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

const Footer = ({ className }) => {
  return (
    <footer className={classnames(className, 'bg-dark text-light p-3 mt-5')}>
      <Container>Footer</Container>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: null,
};

export default Footer;
