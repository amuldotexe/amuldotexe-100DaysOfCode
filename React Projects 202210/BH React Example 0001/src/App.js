import React from "react";
import ReactDOM, { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Boski" animal="Dog" place="Durg" />
      <Pet name="Nandini" animal="Cow" place="Bhilai" />
      <Pet name="Gaura" animal="Cow" place="Bengaluru" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { name: "Boski", animal: "Dog", place: "Durg" }),
//     React.createElement(Pet, {
//       name: "Nandini",
//       animal: "Cow",
//       place: "Bhilai",
//     }),
//     React.createElement(Pet, {
//       name: "Gaura",
//       animal: "Cow",
//       place: "Bengaluru",
//     })
//   );
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
