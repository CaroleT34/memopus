import { useState } from "react";
import CardInterface from "../Interface/CardInterface";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = (props: CardInterface): React.JSX.Element => {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div className="card text-center">
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
          //onClick={updateCard}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button
          type="button"
          className="btn btn-danger col-2 mx-1"
          title="supprimer la carte"
          //onClick={deleteCard}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
