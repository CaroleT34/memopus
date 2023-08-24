import { TermInterfaceProps } from "../Interface/TermInterface";

const Terms = (props: TermInterfaceProps): React.JSX.Element => {
  return (
    <div className="col-2">
      <button
        onClick={(event) => {
          props.onClickChooseTerm(event, props.id);
        }}
        type="button"
        className="btn btn-success m-4"
      >
        {props.name}
      </button>
    </div>
  );
};

export default Terms;
