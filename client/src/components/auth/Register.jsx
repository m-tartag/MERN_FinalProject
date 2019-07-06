import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { setAlert } from '../../actions/alert';
import { Navbar } from '../layouts/index';

const Register = props => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert('Passwords do not match!', 'danger');
    } else {
      console.log('SUCCESS');
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div id="RegisterCSS" className="jumbotron">
        <h2 style={{ paddingBottom: '20px' }}>Create Account</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="name"
              placeholder="Name"
              name="name"
              style={{ margin: '5px' }}
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              style={{ margin: '5px' }}
              required
            />
          </div>
          <div className="form-group">
            <input
              style={{ margin: '5px' }}
              value={password}
              name="password"
              onChange={e => onChange(e)}
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="form-group">
            <input
              style={{ margin: '5px' }}
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              placeholder="Re-Type Password"
              type="password"
            />
          </div>
          <div>
            <Button
              style={{ marginBottom: '40px' }}
              type="submit"
              value="Register"
              outline
              color="success"
            >
              Submit
            </Button>
          </div>
          <p>Already have an account?</p>
          <Link to="./login">Login Here</Link>
        </form>
      </div>
    </Fragment>
  );
};

export default connect(
  null,
  { setAlert }
)(Register);
