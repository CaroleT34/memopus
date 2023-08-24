import { ActionFunctionArgs } from "react-router-dom";
import DataCard from "../services/DataCard";
import CardInterface from "../Interface/CardInterface";

export const actionAdd = async ({ request }: ActionFunctionArgs) => {
  // chargement des données qui sont issues du formulaire
  const formData = await request.formData();
  const card_question = formData.get("card_question") as string;
  const card_answer = formData.get("card_answer") as string;
  const column_id = formData.get("column_id") as string;
  const term_id = formData.get("term_id") as string;

  const newCard: CardInterface = {
    id: 0,
    uid: "",
    question: card_question,
    answer: card_answer,
    column: parseInt(column_id),
    selected: false,
    tid: parseInt(term_id),
  };

  await DataCard.addCard(newCard);
  window.location.reload();
  return null;
};

export const actionDelete = async ({ request }: ActionFunctionArgs) => {
  // chargement des données qui sont issues du formulaire
  const formData = await request.formData();
  const idCard = formData.get("card_id") as string;

  await DataCard.deleteCard(parseInt(idCard));
  window.location.reload();
  return null;
};
