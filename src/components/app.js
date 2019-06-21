/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import '../style.scss';
import Photo from './photo';
import Results from './results';
import Welcome from './welcome';


const FallBack = props => <div>URL Not Found</div>;

const App = props => (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/photos/:photoID" component={Photo} />
            <Route exact path="/results" component={Results} />
            <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
);
export default App;
