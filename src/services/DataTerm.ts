import TermInterface from "../Interface/TermInterface";

export default class DataTerm {
  static url:string = "http://localhost:3001/terms";
  
  static async loadTerms():Promise<TermInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url)
    .then(response => {
      return response.json();
    })
    .then(terms => {
      return terms;
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadTerms", error)
    })
  }
}