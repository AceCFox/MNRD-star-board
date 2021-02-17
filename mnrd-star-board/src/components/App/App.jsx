import './App.css';
import EventForm from '../EventForm/EventForm.jsx';
import Starfield from '../StarField/StarField.jsx';
import UserPrefs from '../UserPrefs/UserPrefs.jsx';

import HeadBar from '../HeadBar/HeadBar.jsx';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'FETCH_ACTIVITY'})
  });

  return (
  
    <Router>
      <div className="App">
      <HeadBar/>
        <header className="App-header">
          <Switch>
            <Redirect exact from="/" to="/form" />
            <Route
                exact
                path="/form"
                component={EventForm}
              />
             <Route
              exact
              path="/starField"
              component={Starfield}
            />
            <Route
              exact
              path="/userPrefs"
              component={UserPrefs}
            />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
