import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
// Components
import { Landing, Slider } from './components/layouts';
import { Register, Login } from './components/auth';
// Global Styles
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={Landing} />
        <section>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
        <div
          style={{
            backgroundColor: 'black',
            border: 'solid',
            textAlign: 'center',
          }}
          className="container"
        >
          <Slider />
        </div>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
