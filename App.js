const element = React.createElement(
  "h1",
  { id: "heading", style: { color: "#ff0000" } },
  "Hello World Inside React!"
);

const divelement1 = React.createElement(
  "div1",
  {},
  React.createElement("div2", {}, [
    React.createElement("h1", {}, "Hello World 1"),
    React.createElement("h1", {}, "Hello World 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divelement1);
