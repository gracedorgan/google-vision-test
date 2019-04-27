/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import '../style.scss';
import Controls from './controls';
import Counter from '../containers/counter';

const Test = props => (
<div>
    ID: {props.match.params.id}
    <Counter/>
    <Controls/>
</div>
);
const About = props => <div> All there is to know about me </div>;
const Welcome = props => <div>Welcome</div>;
const FallBack = props => <div>URL Not Found</div>;
const Nav = props => (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
);

const App = props => (
    <Router>
      <div>
        <Nav />
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route exact path="/test/:id" component={Test} />
            <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
);
export default App;
