import { useState } from "react";
import CardInterface from "../Interface/CardInterface";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalDelete from "./ModalDelete";
import ModalUpdate from "./ModalUpdate";

const Cards = (props: CardInterface): React.JSX.Element => {
  const [showResponse, setShowResponse] = useState(false);
  const [showingModalDelete, setShowingModalDelete] = useState(false);
  const [showingModalUpdate, setShowingModalUpdate] = useState(false);

  return (
    <div className="card text-center my-2 p-0">
      <div className="card-header">{props.question}</div>
      <div className="card-body">
        <h6
          className="card-title"
          onClick={() => setShowResponse(!showResponse)}
          style={{ cursor: "pointer" }}
        >
          Voir la réponse
        </h6>
        {showResponse && <p className="card-text">{props.answer}</p>}
      </div>
      <div className="card-footer d-flex">
        <button
          type="button"
          className="btn btn-warning col mx-2"
          title="proposer une réponse"
          //onClick={submitAnswer}
        >
          Proposer une réponse
        </button>
        <button
          type="button"
          className="btn btn-info col-2 mx-1"
          title="modifier la carte"
          onClick={()=> {setShowingModalUpdate(!showingModalUpdate)}}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button
          type="button"
          className="btn btn-danger col-2 mx-1"
          title="supprimer la carte"
          onClick={() => setShowingModalDelete(!showingModalDelete)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      {showingModalUpdate && <ModalUpdate setIsOpen={setShowingModalUpdate} card={props}/>}
      {showingModalDelete &&  <ModalDelete setShowingModalDelete={setShowingModalDelete} idCard={props.id}/>}
    </div>
  );
};

export default Cards;
