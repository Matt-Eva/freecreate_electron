import React from "react";
import { createRoot } from "react-dom/client";
import MyComponent from "./component";

const root = createRoot(document.body);
root.render(
  <div>
    <h2>Hello from React!</h2>
    <MyComponent />
  </div>,
);
