export class Professional  {
    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, genre: string, weight: number, height: number, hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    imprimirValores(): void {
        console.log((`\nLos valores de sus atributos son:\n· Nombre: ${this.name}\n· Edad: ${this.age}\n· ${this.genre}\n· Peso: ${this.weight}\n· Altura: ${this.height}\n· Color de cabello: ${this.hairColor}\n· Color de ojos: ${this.eyeColor}\n· Raza: ${this.race}\n· Esta retirado: ${this.isRetired}\n· Nacionalidad: ${this.nationality}\n· Numero de Oscar: ${this.oscarsNumber}\n· Profesión: ${this.profession}`));
    }

}


