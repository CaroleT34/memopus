import ColumnInterface from "../Interface/ColumnInterface";

const Columns = (props: ColumnInterface): React.JSX.Element => {
  return (
    <div className="col-3 d-flex justify-content-center align-items-end">
      <button 
        type="button" 
        className="btn btn-warning mx-3"
        //onClick={AddCard}
      >
        +
      </button>
      <div className="h6 d-flex align-items-center">{props.label}</div>
    </div>
  );
};

export default Columns;
