import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import shoppinglist from "./components/Redux/shoppingList";
import recipeReducer from './components/Redux/recipe'
// store to keep all reducers
const store = configureStore({
  reducer: {
    shopping: shoppinglist,
    recipe:recipeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

// store.subscribe(() =>
//   console.log(store.getState())
// );

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
