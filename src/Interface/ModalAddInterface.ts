import ColumnInterface from "./ColumnInterface";

export default interface ModalAddInterface {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  column: ColumnInterface;
}