import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//redux toolkit for state management  # "npm install @reduxjs/toolkit, npm install redux react-redux"
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";

/**/
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering von jeder Seite mit Stricktmode und mit der Anwendung von Redux Store, alle anderen wird aus der App.jsx File "gerendet"
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
