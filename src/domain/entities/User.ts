export class User {
    constructor(
      public readonly _id: number, // _id est un nombre selon ta BDD
      public pseudo: string,
      public email: string,
      public first_name: string,
      public last_name: string,
      public gender: string
    ) {}
  
    // Méthode pour masquer les données sensibles (ex. password)
    toJSON() {
      return {
        _id: this._id,
        pseudo: this.pseudo,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        gender: this.gender
      };
    }
  }
  