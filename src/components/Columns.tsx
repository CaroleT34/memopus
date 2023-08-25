import React, { useEffect, useState } from "react";
import ColumnInterface from "../Interface/ColumnInterface";
import DataCard from "../services/DataCard";
import CardInterface from "../Interface/CardInterface";
import Cards from "./Cards";
import ModalAdd from "./ModalAdd";
import ModalDelete from "./ModalDelete";

const Columns = (props: ColumnInterface): React.JSX.Element => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    props.terms &&
      props.terms.map((term) => {
        if (term.selected) {
          (async () => {
            const loadCards: CardInterface[] =
              await DataCard.loadCardsbyTermsId(term);
            setCards(loadCards);
          })();
        }
      });
  }, [props.terms]);

  return (
    <div className="col-3">
      <div className="row d-flex justify-content-center align-items-end">
        <button
          type="button"
          className="btn btn-warning mx-3 col-1"
          title="ajouter une carte"
          //onClick={AddCard}
          onClick={() => setIsOpen(true)}
        >
          +
        </button>
        <div className="h6 text-center col">{props.label}</div>
      </div>
      <div className="row d-flex my-4 mx-2 justify-content-center">
        {cards.map(
          (card) =>
            card.column === props.id && (
              <Cards
                key={card.id}
                {...card}
              />
            )
        )}
      </div>
      {isOpen && <ModalAdd setIsOpen={setIsOpen} column={props} />}
    </div>
  );
};

export default Columns;
