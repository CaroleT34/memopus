import { useFetcher, useLoaderData } from "react-router-dom";
import "./Modal.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalUpdateInterface from "../Interface/ModalUpdateInterface";
import ColumnInterface from "../Interface/ColumnInterface";
import TermInterface from "../Interface/TermInterface";
import { useState } from "react";

const ModalUpdate: React.FC<ModalUpdateInterface> = ({ setIsOpen, card }) => {
  const arrayOfColumnsAndTerms: any = useLoaderData();
  const [idColumnSelected, setIdColumnSelected] = useState(card.column);
  const [idTermSelected, setIdTermSelected] = useState(card.tid);

  const fetcher = useFetcher();
  return (
    <>
      <div className="" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal_spe">
          <div className="modalHeader">
            <h5 className="heading">Editer une carte</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <fetcher.Form action="/update/card" method="POST">
            <div className="modalContent">
              <input
                className="form-control"
                type="hidden"
                name="card_id"
                id="card-id"
                defaultValue={card.id}
              />
              <label className="col-2" htmlFor="card-question">
                Question
              </label>
              <input
                className="form-control"
                type="text"
                name="card_question"
                id="card-question"
                defaultValue={card.question}
              />
              <label className="col-2" htmlFor="card-answer">
                Réponse
              </label>
              <input
                className="form-control"
                type="text"
                name="card_answer"
                id="card-answer"
                defaultValue={card.answer}
              />
              <label htmlFor="column-select">Colonne</label>
              <select
                className="form-select"
                name="column_label"
                id="column-select"
                onChange={(event) => {
                    arrayOfColumnsAndTerms.columns.map((column: ColumnInterface) => {
                        if(column.label === event.target.value) {
                            setIdColumnSelected(column.id);
                        }
                    })
                }}
              >
                {arrayOfColumnsAndTerms.columns.map(
                  (column: ColumnInterface) => (
                    <option
                      key={column.id}
                      defaultValue={column.id}
                      selected={column.id === card.column}
                    >
                      {column.label}
                    </option>
                  )
                )}
              </select>
              <input type="hidden" name="column_id" value={idColumnSelected} />
              <label htmlFor="term-select">Thème</label>
              <select
                className="form-select"
                name="term_label"
                onChange={(event) => {
                  arrayOfColumnsAndTerms.terms.map((term: TermInterface) => {
                    if (term.name === event.target.value) {
                      setIdTermSelected(term.id);
                    }
                  });
                }}
                id="term-select"
              >
                {arrayOfColumnsAndTerms.terms.map((term: TermInterface) => (
                  <option
                    key={term.id}
                    defaultValue={term.id}
                    selected={term.id === card.tid}
                  >
                    {term.name}
                  </option>
                ))}
              </select>
              <input type="hidden" name="term_id" value={idTermSelected} />
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button
                  type="submit"
                  value="Modifier une carte"
                  className="deleteBtn"
                >
                  Modifier
                </button>
                <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                  Annuler
                </button>
              </div>
            </div>
          </fetcher.Form>
        </div>
      </div>
    </>
  );
};

export default ModalUpdate;
