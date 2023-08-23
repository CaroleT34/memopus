import TermInterface from "../Interface/TermInterface";

const Terms= (props: TermInterface): React.JSX.Element => {
    return (
        <button type="button" className="btn btn-success m-4">{props.name}</button>
    );
}

export default Terms;