import CardInterface from "../Interface/CardInterface";

export default class DataCard {
  private static instance: DataCard;
  static url = "http://localhost:3001/cards";

  public static getInstance(): DataCard {
    if (!DataCard.instance) {
      DataCard.instance = new DataCard();
    }
    return DataCard.instance;
  }

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
