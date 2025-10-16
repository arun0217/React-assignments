
import React from "react";
import "./App.css";

const UserCard = ({ name, age, location }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default UserCard;