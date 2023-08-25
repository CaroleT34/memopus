import TermInterface from "../Interface/TermInterface";

export default class DataTerm {
  private static instance: DataTerm;
  base_url: string;

  private constructor() {
    this.base_url = "http://localhost:3001/";
  }

  public static getInstance(): DataTerm {
    if (!DataTerm.instance) {
      DataTerm.instance = new DataTerm();
    }
    return DataTerm.instance;
  }

  async loadTerms(): Promise<TermInterface[]> {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.base_url + "terms")
      .then((response) => {
        return response.json();
      })
      .then((terms) => {
        return terms;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans loadTerms", error);
      });
  }
}
