import ColumnInterface from "../Interface/ColumnInterface";

export default class DataColumn {
  private static instance: DataColumn;
  base_url: string;

  private constructor() {
    this.base_url = "http://localhost:3001/";
  }

  public static getInstance(): DataColumn {
    if (!DataColumn.instance) {
      DataColumn.instance = new DataColumn();
    }
    return DataColumn.instance;
  }

  async loadColumns():Promise<ColumnInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.base_url + "columns")
    .then(response => {
      return response.json();
    })
    .then(tasks => {
      return tasks;
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadColumns", error)
    })
  }
}