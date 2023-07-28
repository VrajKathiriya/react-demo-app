import React from "react";

export default function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.role}</h1>
    </div>
  );
}
