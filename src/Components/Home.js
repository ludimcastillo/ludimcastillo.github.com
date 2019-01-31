import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div class="panel">
        <div class="panel__wrapper">
          <div class="panel__content">
          <h1 class="panel__headline">Hi, My Name is Ludim.</h1>
          <h2 class="panel__headline">THIS WEBSITE IS CURRENTLY UNDER CONSTRUCTION</h2>
          <div class="panel__block"></div>
          <p><strong>BUT</strong>,You can find me on:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/ludimcastillo">Linkedin</a></li>
            <li><a href="https://github.com/ludimcastillo">Github</a></li>
            <li><a href="https://www.linkedin.com/in/ludimcastillo">Instagram</a></li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;