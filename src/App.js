import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CompWChildren from "./components/CompWChildren/CompWChildren";
import CompWDesProps from "./components/CompWDesProps";
import MouseTracker from "./components/MouseTracker";
import MyLink from "./components/MyLink/MyLink";
import Reservation from "./components/Reservation";

function App() {
  return (
    <div className="App">
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
      <div>
        <Reservation />
      </div>
    </div>
  );
}

export default App;
