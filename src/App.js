import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer className="ms-5">
          This project was coded by Niloufar Moradnouri and is{" "}
          <a
            href="https://github.com/NellMn/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
