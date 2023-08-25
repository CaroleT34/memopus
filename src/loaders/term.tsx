import DataTerm from "../services/DataTerm";

export const loader = async () => {
    const data = DataTerm.getInstance();
    return data.loadTerms();
  };