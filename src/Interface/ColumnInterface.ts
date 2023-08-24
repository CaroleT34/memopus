import CardInterface from "./CardInterface";
import TermInterface from "./TermInterface";

export default interface ColumnInterface {
  id: number;
  label: string;
  cards: CardInterface[];
  terms: TermInterface[];
}