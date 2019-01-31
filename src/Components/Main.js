import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

// Components
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul class="header">
            <li><NavLink exact to="/">Home</NavLink></li>
          </ul>
          

          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;