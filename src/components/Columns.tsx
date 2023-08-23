import React, { useEffect, useState } from "react";
import ColumnInterface from "../Interface/ColumnInterface";
import DataCard from "../services/DataCard";
import CardInterface from "../Interface/CardInterface";
import Cards from "./Cards";
import Modal from "./Modal";

const Columns = (props: ColumnInterface): React.JSX.Element => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const loadCards: CardInterface[] = await DataCard.loadCards();
      setCards(loadCards);
    })();
  }, []);

  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>, idCard: number): void => {
    if (window.confirm("Voulez-vous supprimer cette tâche ?")) {
      const cardsCopy = cards.filter(card => {
        if (idCard !== card.id) {
          DataCard.deleteCard(idCard);
          return card;
        }

      });
      setCards(cardsCopy);
    }
  }

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
      <div className="row d-flex my-4 justify-content-center">
        {cards.map(
          (card) =>
            card.column === props.id && <Cards key={card.id} {...card} onClickDelete={handleClickDelete}/>
        )}
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} columnId={props.id}/>}
    </div>
  );
};

export default Columns;

