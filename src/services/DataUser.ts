export default class DataUser {
  private static instance: DataUser;
  base_url: string;

  private constructor() {
    this.base_url = "http://localhost:3001/";
  }

  public static getInstance(): DataUser {
    if (!DataUser.instance) {
      DataUser.instance = new DataUser();
    }
    return DataUser.instance;
  }

  async loadUsers() {
    // Pour rappel, fetch renvoie une promesse
    return fetch(this.base_url + "users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return users;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans loadUsers", error);
      });
  }

}


