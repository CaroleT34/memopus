import ColumnInterface from "../Interface/ColumnInterface";

export default class DataColumn {
  static url:string = "http://localhost:3001/columns";
  
  static async loadColumns():Promise<ColumnInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url)
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