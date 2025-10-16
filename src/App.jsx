import React from "react";
import UserCard from "./Usercard";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="app-container">
      <h1>React Components Example</h1>
      <UserCard name="Arun" age={22} location="Ahmedabad" />
      <Counter />
    </div>
  );
};

export default App;