import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Columns from "./Columns";
import ColumnInterface from "../Interface/ColumnInterface";
import DataColumn from "../services/DataColumn";
import TermInterface from "../Interface/TermInterface";
import DataTerm from "../services/DataTerm";
import Terms from "./Terms";

function App() {
  const [columns, setColumns] = useState<ColumnInterface[]>([]);
  const [terms, setTerms] = useState<TermInterface[]>([]);

  useEffect(() => {
    (async () => {
      const loadColumns: ColumnInterface[] = await DataColumn.loadColumns();
      setColumns(loadColumns);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const loadTerms: TermInterface[] = await DataTerm.loadTerms();
      setTerms(loadTerms);
    })();
  }, []);


  //TODO: Voir pour limiter son appel!
  useEffect(() => {
    const updatedColumns = columns.map(column => {
      return {
        ...column,
        terms: terms,
      };;
    });
    setColumns(updatedColumns);
  }, [terms]);

  
  return (
    <div className="App">
      <header className="col d-flex justify-content-center bg-light h2 p-4">
        Memopus
      </header>
      <nav className="d-flex justify-content-center">
        {terms.map((term) => (
          <Terms key={term.id} {...term} />
        ))}
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
