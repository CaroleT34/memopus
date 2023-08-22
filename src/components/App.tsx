import React, { useEffect, useState } from "react";
import "./App.css";
import Columns from "./Columns";
import ColumnInterface from "../Interface/ColumnInterface";
import DataColumn from "../services/DataColumn";

function App() {
  const [columns, setColumns] = useState<ColumnInterface[]>([]);

  useEffect(()=> {
    (async () => {
      const loadColumns: ColumnInterface[] = await DataColumn.loadColumns();
      setColumns(loadColumns);
    })();
  }, [])

  return (
    <div className="App">
      <header className="col d-flex justify-content-center bg-light h2 p-4" > Memopus </header>
      <nav> Emplacement des thèmes </nav>
      <div className="row m-auto">
        {columns.map(column => column.id === 1 && <Columns key={column.id} {...column} />)}
        {columns.map(column => column.id === 2 && <Columns key={column.id} {...column}/>)}
        {columns.map(column => column.id === 3 && <Columns key={column.id} {...column}/>)}
        {columns.map(column => column.id === 4 && <Columns key={column.id} {...column}/>)}
      </div>
    </div>
  );
}

export default App;
