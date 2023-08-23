import { useFetcher } from "react-router-dom";
import "./Modal.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  columnId : number;
}

const Modal: React.FC<ModalProps> = ({ setIsOpen, columnId }) => {
  const fetcher = useFetcher();
  console.log(columnId);
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal_spe">
          <div className="modalHeader">
            <h5 className="heading">Ajouter une carte</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <fetcher.Form action="/add/card" method="POST">
            <div className="modalContent">
              <label htmlFor="card-question">Question</label>
              <input type="text" name="card_question" id="card-question" />
              <label htmlFor="card-answer">Réponse</label>
              <input type="text" name="card_answer" id="card-answer" />
              <input type="hidden" name="column_id" value={columnId} />
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button type="submit" value="Ajouter une carte" className="deleteBtn">Ajouter</button>
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

export default Modal;
