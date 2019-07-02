import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Register = () => {
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
      console.log('Passwords do not match!');
      alert('Passwords do not match!');
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          'http://localhost:4000/api/users',
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };
  return (
    <Fragment>
      <div id="RegisterCSS" className="jumbotron">
        <h2>Create Account</h2>
        <form onSubmit={e => onSubmit(e)}>
          <input
            onChange={e => onChange(e)}
            style={{ margin: '5px' }}
            placeholder="Name"
            type="text"
          />{' '}
          <div>
            <input
              onChange={e => onChange(e)}
              style={{ margin: '5px' }}
              placeholder="Email"
              type="email"
            />{' '}
          </div>
          <div>
            <input
              onChange={e => onChange(e)}
              style={{ margin: '5px' }}
              placeholder="Password"
              type="password"
            />{' '}
          </div>
          <input
            onChange={e => onChange(e)}
            style={{ margin: '5px' }}
            placeholder="Re-Type Password"
            type="password"
          />
          <div>
            <Button
              style={{ margin: '20px' }}
              tag={Link}
              to="#"
              outline
              color="success"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
