import ColumnInterface from "./ColumnInterface";

export default interface ModalInterface {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  column: ColumnInterface;
  idCard?: number;
}
