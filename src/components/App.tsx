import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import "./App.css";
import Columns from "./Columns";
import ColumnInterface from "../Interface/ColumnInterface";
import TermInterface from "../Interface/TermInterface";
import Terms from "./Terms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function App() {
  const arrayOfColumnsAndTerms: any = useLoaderData();
  const [columns, setColumns] = useState<ColumnInterface[]>([]);
  const [terms, setTerms] = useState<TermInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const updatedColumns = arrayOfColumnsAndTerms.columns.map((col: ColumnInterface) => {
        return {
          ...col,
          terms: terms,
        };
      });
      setColumns(updatedColumns);
    })();
  }, [terms]);

  useEffect(() => {
    setTerms(arrayOfColumnsAndTerms.terms);
  }, []);

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

  console.log(terms);

  return (
    <div className="App">
      <header className="d-flex justify-content-center bg-light p-4">
        <div className="h2 col-10 text-center">Memopus</div>
        <div
          className="d-flex align-items-center justify-content-center flex-row"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <p className="my-0 mx-2">Déconnexion</p>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
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
