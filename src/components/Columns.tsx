import React, { useEffect, useState } from "react";
import ColumnInterface from "../Interface/ColumnInterface";
import DataCard from "../services/DataCard";
import CardInterface from "../Interface/CardInterface";
import Cards from "./Cards";

const Columns = (props: ColumnInterface): React.JSX.Element => {
  const [cards, setCards] = useState<CardInterface[]>([]);

  useEffect(() => {
    (async () => {
      const loadCards: CardInterface[] = await DataCard.loadCards();
      setCards(loadCards);
    })();
  }, []);

  return (
    <div className="col-3">
      <div className="row d-flex justify-content-center align-items-end">
        <button
          type="button"
          className="btn btn-warning mx-3 col-1"
          title="ajouter une carte"
          //onClick={AddCard}
        >
          +
        </button>
        <div className="h6 text-center col">{props.label}</div>
      </div>
      <div className="d-flex my-4 justify-content-center">
        {cards.map(
          (card) =>
            card.column === props.id && <Cards key={card.id} {...card} />
        )}
      </div>
    </div>
  );
};

export default Columns;
