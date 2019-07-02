import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'reactstrap';

const Landing = () => (
  <Fragment>
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
