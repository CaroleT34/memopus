export default interface TermInterface {
  id: number;
  uid: string;
  name: string;
  open: boolean;
  selected: boolean;
}

export interface TermInterfaceProps extends TermInterface {
  onClickChooseTerm: (
    event: React.MouseEvent<HTMLButtonElement>,
    idTerm: number
  ) => void;
}