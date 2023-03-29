import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Create and insert a container on the webpage for the Popup screen and assign a unique classname and id
const container = document.createElement("div");
container.className = "react-root";
container.id = "amber-app";
if (document.body) {
  document.body.insertAdjacentElement("afterbegin", container);
}
const root = createRoot(container);
root.render(<App />);
