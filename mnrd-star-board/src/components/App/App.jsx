import './App.css';
import EventForm from '../EventForm/EventForm.jsx';
import Starfield from '../StarField/StarField.jsx';
import UserPrefs from '../UserPrefs/UserPrefs.jsx';
import HeadBar from '../HeadBar/HeadBar.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import 'fontsource-roboto';
import SportsIcon from '@material-ui/icons/Sports';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'FETCH_ACTIVITY'})
    dispatch({type: 'FETCH_USER'})
    dispatch({type: 'FETCH_TEAM'})
  });

  return (
  
    <Router>
      <div className="App">
      <HeadBar/>
        <header className="App-header">
          <Switch>
            <Redirect exact from="/" to="/form" />
            <ProtectedRoute
                exact
                path="/form"
                component={EventForm}
              />
             <ProtectedRoute
              exact
              path="/starField"
              component={Starfield}
            />
            <ProtectedRoute
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
