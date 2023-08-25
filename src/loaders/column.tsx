import DataColumn from "../services/DataColumn";

export const loader = async () => {
    const data = DataColumn.getInstance();
    return data.loadColumns();
  };