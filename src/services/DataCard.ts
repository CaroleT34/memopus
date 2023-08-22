import CardInterface from "../Interface/CardInterface";

export default class DataCard {
  static url:string = "http://localhost:3001/cards";
  
  static async loadCards():Promise<CardInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url)
    .then(response => {
      return response.json();
    })
    .then(tasks => {
      return tasks;
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadCards", error)
    })
  }
}