export default interface CardInterface {
  id: number;
  uid: string;
  question: string;
  answer: string;
  column: number;
  selected: boolean;
  tid: number;
}

export interface CardInterfaceProps extends CardInterface {
  onClickDelete: (
    event: React.MouseEvent<HTMLButtonElement>,
    idCard: number
  ) => void;
}