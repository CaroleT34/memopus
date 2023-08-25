import CardInterface from "./CardInterface";

export default interface ModalUpdateInterface {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  card : CardInterface;
}