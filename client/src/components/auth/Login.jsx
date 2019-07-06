import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navbar } from '../layouts/index';

const Login = () => (
  <Fragment>
    <Navbar />
    <div id="LoginCSS" className="jumbotron">
      <h2 style={{ paddingBottom: '20px' }}>Login</h2>
      <form>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            style={{ margin: '5px' }}
            required
          />
        </div>
        <div className="form-group">
          <input
            style={{ margin: '5px' }}
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <div>
          <Button
            style={{ marginBottom: '40px' }}
            type="submit"
            value="Login"
            outline
            color="success"
          >
            Login
          </Button>
        </div>
        <p>Need an account?</p>
        <Link to="./register">Create Account Here!</Link>
      </form>
    </div>
  </Fragment>
);

export default Login;
