import './App.css';
import EventForm from '../EventForm/EventForm.jsx';
import Starfield from '../StarField/StarField.jsx';
import HeadBar from '../HeadBar/HeadBar.jsx';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';


function App() {
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
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
