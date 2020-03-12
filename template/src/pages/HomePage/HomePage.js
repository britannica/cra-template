import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DefaultTemplate from '../../templates/DefaultTemplate/DefaultTemplate';

const HomePage = () => {
  return (
    <DefaultTemplate>
      <Container>
        <Row>
          <Col>Home Page</Col>
        </Row>
      </Container>
    </DefaultTemplate>
  );
};

export default HomePage;
