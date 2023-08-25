import { useFetcher, useLoaderData } from "react-router-dom";
import "./Modal.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalUpdateInterface from "../Interface/ModalUpdateInterface";

const ModalUpdate: React.FC<ModalUpdateInterface> = ({ setIsOpen, card }) => {
  
  const column: any = useLoaderData();
  console.log(column);
  const fetcher = useFetcher();
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal_spe">
          <div className="modalHeader">
            <h5 className="heading">Modifier une carte</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <fetcher.Form action="/add/card" method="POST">
            <div className="modalContent">
              <label className="col-2" htmlFor="card-question">
                Question
              </label>
              <input
                className="col-10 form-control"
                type="text"
                name="card_question"
                id="card-question"
                value={card.question}
              />
              <label className="col-2" htmlFor="card-answer">
                Réponse
              </label>
              <input
                className="col-10 form-control"
                type="text"
                name="card_answer"
                id="card-answer"
                value={card.answer}
              />
              <label htmlFor="pet-select">Colonne</label>
              <select className="col-4" name="pets" id="pet-select">
                <option value="dog">{card.column}</option>
              </select>
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button
                  type="submit"
                  value="Ajouter une carte"
                  className="deleteBtn"
                >
                  Ajouter
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
