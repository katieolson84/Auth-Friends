import React from "react";

const Friend = ({ friend }) => {
  return (
    <div className="friend-container">
      <h4>Name: {friend.name}</h4>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
};
export default Friend;
