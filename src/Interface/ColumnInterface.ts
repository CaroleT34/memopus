import TermInterface from "./TermInterface";

export default interface ColumnInterface {
  id: number;
  label: string;
  cards?: string;
  terms?: TermInterface[];
}

//TODO : Modif cards et terms en []