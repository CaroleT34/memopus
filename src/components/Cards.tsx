import { useState } from "react";
import CardInterface from "../Interface/CardInterface";

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
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-warning"
          title="proposer une réponse"
          //onClick={submitAnswer}
        >
          Proposer une réponse
        </button>
      </div>
    </div>
  );
};

export default Cards;
