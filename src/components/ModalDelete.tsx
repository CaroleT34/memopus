import { useFetcher } from "react-router-dom";

interface ModalDeleteInterface {
  setShowingModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  idCard: number;
}

const ModalDelete: React.FC<ModalDeleteInterface> = ({
  setShowingModalDelete,
  idCard,
}) => {
  const fetcher = useFetcher();
  return (
    <>
      <div onClick={() => setShowingModalDelete(false)} />
      <div>
        <div style={{ minHeight: 150 }}>
          <div className="modalHeader">
            <h5 className="heading">Voulez-vous supprimer cette carte ?</h5>
          </div>
          <fetcher.Form action="/delete/card" method="POST">
            <div className="modalContent">
              <input type="hidden" name="card_id" value={idCard} />
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button
                  type="submit"
                  value="Supprimer cette carte"
                  className="deleteBtn"
                >
                  Supprimer
                </button>
                <button
                  className="cancelBtn"
                  onClick={() => setShowingModalDelete(false)}
                >
                  Annuler
                </button>
              </div>
            </div>
          </fetcher.Form>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
