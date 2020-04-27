import React, { Component } from "react";
import "./styles/normalize.css";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header>
            <h1>This Project is Currently Offline</h1>
            <h2>
              Please contact <a href="mailto: ajessen@ajessen.com">ajessen@ajessen.com</a> if you would like a live
              version to be put up for your use.
            </h2>
          </header>
          <footer>
                <p>Copyright 2020 AJessen. MIT License.</p>
                <a href="https://github.com/andrewtyl/project-offline"><img id="github-footer-icon" src={require("./assets/GitHub-Mark-32px.png")} alt="View this Website on Github"/></a>
            </footer>
        </div>
    );
  }
}

export default App;
