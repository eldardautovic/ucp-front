import React from "react";
import ReactDOM from "react-dom";
import "./assets/fonts/fonts.css";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

import { Provider } from 'react-redux'
import store from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
