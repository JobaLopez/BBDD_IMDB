import { Professional } from "./professional";

//INICIO DE LA CLASE
class Movie {

    public title : string;
    public releaseYear : number;
    public actors : Professional[];
    public nationality : string;
    public director : Professional;
    public writer : Professional;
    public language : string;
    public platform : string;
    public isMCU : boolean;
    public mainCharacterName : string;
    public producer : Professional;
    public distributor : string;
    public genre : string;

    constructor(title : string, releaseYear : number, nationality : string, genre : string){

        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;

    }

    //GETTERS Y SETTERS DE TODOS LOS ATRIBUTOS
    //Al ser publicos podrían modificarse sin ellos pero va a quedar más limpio con ellos.
    public getTitle() : string {

        return this.title;

    }

    public setTitle(newTitle : string) {

        this.title = newTitle;

    }

    public getReleaseYear() : number {

        return this.releaseYear;

    }

    public setReleaseYear(newReleaseYear : number) {

        this.releaseYear = newReleaseYear;

    }
    
    public getActors() : Professional[] {

        return this.actors;

    }

    public setActors(newActors : Professional[]) {

        this.actors = newActors;

    }

    public getNationality() : string {

        return this.nationality;

    }

    public setNationality(newNationality : string) {

        this.nationality = newNationality;

    }

    public getDirector() : Professional {

        return this.director;

    }

    public setDirector(newDirector : Professional) {

        this.director = newDirector;

    }

    public getWriter() : Professional {

        return this.writer;

    }

    public setWriter(newWriter : Professional) {

        this.writer = newWriter;

    }

    public getLanguage() : string {

        return this.language;

    }

    public setLanguage(newLanguage : string) {

        this.language = newLanguage;

    }

    public getPlatform() : string {

        return this.platform;

    }

    public setPlatform(newPlatform : string) {

        this.platform = newPlatform;

    }

    public getIsMCU() : boolean {

        return this.isMCU;

    }

    public setIsMCU(newIsMCU : boolean) {

        this.isMCU = newIsMCU;

    }

    public getMainCharacterName() : string {

        return this.mainCharacterName;

    }

    public setMainCharacterName(newMainCharacterName : string) {

        this.mainCharacterName = newMainCharacterName;

    }

    public getProducer() : Professional {

        return this.producer;

    }

    public setProducer(newProducer : Professional) {

        this.producer = newProducer;

    }

    public getDistributor() : string {

        return this.distributor;

    }

    public setDistributor(newDistributor : string) {

        this.distributor = newDistributor;

    }

    public getGenre() : string {

        return this.genre;

    }

    public setGenre(newGenre : string) {

        this.genre = newGenre;

    }

    //MÉTODO PARA MOSTRAR LOS DATOS DE LAS PELÍCULAS
    public showProperties() : string{

        let properties : string = "";

        for (let property in this) {

            if (this[property].toString().search(/function/i)) {

                if (property == "actors") {

                    for (let i = 0; i < this.actors.length; i++) {
                        
                        properties += `Actor:\n`;

                        for (let propiedad in this.actors[i]){

                            properties += `${propiedad} - ${this.actors[i][propiedad]}\n`;

                        }
                        
                        properties += `\n`;

                    }
                } else if (property == "director") {

                    properties += `Director:\n`;
                    
                    for (let propiedad in this.director){

                        properties += `${propiedad} - ${this.director[propiedad]}\n`;

                    }

                    properties += `\n`;

                } else if (property == "producer"){

                    properties += `Producer:\n`;
                    
                    for (let propiedad in this.producer){

                        properties += `${propiedad} - ${this.producer[propiedad]}\n`;

                    }

                    properties += `\n`;

                } else if (property == "writer"){

                    properties += `Writer:\n`;
                    
                    for (let propiedad in this.writer){

                        properties += `${propiedad} - ${this.writer[propiedad]}\n`;

                    }

                    properties += `\n`;

                } else {

                    properties += `${property.charAt(0).toUpperCase() + property.slice(1)}: ${this[property]}\n\n`;

                }

            }
                
        }

        return properties;

    }


}

export { Movie };