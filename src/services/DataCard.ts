import CardInterface from "../Interface/CardInterface";
import TermInterface from "../Interface/TermInterface";
import Terms from './../components/Terms';

export default class DataCard {
  private static instance: DataCard;
  static url = "http://localhost:3001/cards";

  static async loadCards(): Promise<CardInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url)
      .then((response) => {
        return response.json();
      })
      .then((tasks) => {
        return tasks;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans loadCards", error);
      });
  }

  static async loadCardsbyTermsId(terms: TermInterface): Promise<CardInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    try {
      const cards = await this.loadCards(); // Await the asynchronous call
      return cards.filter(card => card.tid === terms.id);
    } catch (error) {
      console.error("Erreur attrapée dans loadCardsbyTermsId", error);
      throw error; // Rethrow the error if needed
    }
  }

  static async addCard(card: CardInterface): Promise<any> {
    // Pour rappel la fonction fetch retourne une promesse
    return fetch(this.url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(card),
    })
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        return cards;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static async deleteCard(idCard: number): Promise<any> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.url + "/" + idCard, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        return cards;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans deleteCard", error);
      });
  }
}
