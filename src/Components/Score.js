import React from "react";

export default function Score(props) {
  return (
    <div className="Score">
      <h2>Rolls: {props.Rolls}</h2>
      <h2>Your Highscore:{props.Highest}</h2>
    </div>
  );
}
