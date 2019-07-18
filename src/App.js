import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CompWChildren from "./components/CompWChildren/CompWChildren";
import CompWDesProps from "./components/CompWDesProps";
import MouseTracker from "./components/MouseTracker";
import MyLink from "./components/MyLink/MyLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <MouseTracker />
      </div>
      <div>
        <MyLink>Is this here?</MyLink>
      </div>
      <CompWChildren>Some children</CompWChildren>
      <CompWDesProps
        task={{ id: "my id", title: "my title", state: "my state" }}
      />
    </div>
  );
}

export default App;
