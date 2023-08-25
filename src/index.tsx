import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import {
  actionAdd as addCard,
  actionDelete as deleteCard,
} from "./actions/card";
import Login from "./components/Login";
import { loader as connexionLoader } from "./loaders/connexion";
import { loader as columnLoader } from "./loaders/column";
import { loader as termLoader } from "./loaders/term";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

async function combinedLoader() {
  const columns = await columnLoader();
  const terms = await termLoader();
  return { columns, terms };
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} loader={connexionLoader} />
      <Route path="/home" element={<App />} loader={combinedLoader}/>
      <Route path="/add/card" action={addCard} />
      <Route path="/delete/card" action={deleteCard} />
    </>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
