import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
// Components
import { Navbar, Landing } from './components/layouts';
import { Register, Login } from './components/auth';
// Global Styles
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
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
        <Route exact path="/" component={Landing} />
        <section>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
