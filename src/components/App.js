import Tasks from "./Tasks";
import React from "react";
import Section from "./Section";

function App() {
  return (
      <div className="container">
          <div className="row align-items-start">
              <Section sort={"todo"} status={"To-Do"}/>
              <Section sort={"progress"} status={"In-Progress"}/>
              <Section sort={"done"} status={"Done"}/>
          </div>
      </div>
  );
}

export default App;
