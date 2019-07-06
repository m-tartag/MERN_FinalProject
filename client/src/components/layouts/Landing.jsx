import React, { Fragment } from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import { Navbar } from './index';

const Landing = () => (
  <Fragment>
    <div
      style={{
        padding: '50px',
        backgroundColor: '#1565C0',
        color: 'white',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily: 'Viga',
      }}
    >
      Matt Tartaglia Design
    </div>
    <Navbar />
    <Jumbotron id="Landing">
      <h1>Welcome to the App!</h1>
      <Button className="LandingButton" color="success">
        Sign Up
      </Button>
      <Button className="LandingButton" color="primary">
        Log In
      </Button>
    </Jumbotron>
    <div id="News">
      <Container className="LandingContainer">News</Container>
      <Container className="LandingContainer">Features</Container>
      <Container className="LandingContainer">Help</Container>
    </div>
  </Fragment>
);
export default Landing;
