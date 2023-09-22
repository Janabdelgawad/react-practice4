import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2023, 13, 1, 2);
const currentTime = date.getHours();
let greeting;

const colored = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Morning";
  colored.color = "red";
} else if (currentTime < 18) {
  greeting = "Afternoon";
  colored.color = "green";
} else {
  greeting = "Night";
  colored.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={colored}>
      Good {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
