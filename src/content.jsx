import React from "react";
import { createRoot } from "react-dom/client";
import "./content.css";
import App from "./App";


// This does not directly affect the "script-src" directive or Content-Security-Policy.
//  
// const everyDivInHead = document.head.children;
// for (const child of everyDivInHead) {
  //   if (child.content == "origin-when-cross-origin") {
    //     child.content = "no-referrer"
    //     console.log("Changing the CSP worked!")
    //   }
    // }

// Allow d3.js in the "script-src" directive or Content-Security-Policy of the webpage by inserting a meta tag like this:
// Create the meta element
// const cspMeta = document.createElement('meta');
// // Set the http-equiv and content attributes
// cspMeta.httpEquiv = "Content-Security-Policy";
// cspMeta.content = "script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' http://localhost:* http://127.0.0.1:* https://d3js.org/*"
// // Append the meta element to the head section of the document
// document.head.insertAdjacentElement("beforeend", cspMeta);

// // Insert the d3.js script into the webpage
// const d3JSscript = document.createElement("script");
// d3JSscript.src = "https://d3js.org/d3.v7.min.js"
// document.head.insertAdjacentElement("beforeend", d3JSscript);

const container = document.createElement("div");
container.className = "react-root";
container.id = "amber-app";
if (document.body) {
  document.body.insertAdjacentElement("afterbegin", container);
}

const root = createRoot(container);
root.render(<App />);
