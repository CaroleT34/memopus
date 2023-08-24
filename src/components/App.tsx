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

  useEffect(() => {
    (async () => {
      const updatedColumns = columns.map((column) => {
        return {
          ...column,
          terms: terms,
        };
      });
      setColumns(updatedColumns);
    })();
  }, [terms]);

  const handleClickChooseTerm = (
    event: React.MouseEvent<HTMLButtonElement>,
    idTerm: number
  ): void => {
    event.preventDefault();

    //Change selectedTerms
    terms.map((term) => {
      if (term.id === idTerm) {
        const updatedTerms = terms.map((term) => {
          return {
            ...term,
            selected: term.id === idTerm,
          };
        });
        setTerms(updatedTerms);
      }
    });
  };

  return (
    <div className="App">
      <header className="col d-flex justify-content-center bg-light h2 p-4">
        Memopus
      </header>
      <nav className="d-flex justify-content-center">
        {terms.map((term) => (
          <Terms
            key={term.uid}
            {...term}
            onClickChooseTerm={handleClickChooseTerm}
          />
        ))}
      </nav>
      {terms.map((term) => (
        <section className="row" key={term.id}>
          {term.selected && <h1 className="col-8 m-auto my-3">{term.name}</h1>}
        </section>
      ))}
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
