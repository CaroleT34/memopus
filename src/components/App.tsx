import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Columns from "./Columns";
import ColumnInterface from "../Interface/ColumnInterface";
import DataColumn from "../services/DataColumn";

function App() {
  const [columns, setColumns] = useState<ColumnInterface[]>([]);

  useEffect(() => {
    (async () => {
      const loadColumns: ColumnInterface[] = await DataColumn.loadColumns();
      setColumns(loadColumns);
    })();
  }, []);

  return (
    <div className="App">
      <header className="col d-flex justify-content-center bg-light h2 p-4">
        Memopus
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
        </ul>
      </nav>
      <div className="row m-auto">
        {columns.map((column) => (
          <Columns key={column.id} {...column} />
        ))}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
