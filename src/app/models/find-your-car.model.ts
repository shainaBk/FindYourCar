export class FindYourCar {
    name!: String;
    texte!: String;
    price!: number;
    adDate!: number;
    releaseDate!: number;
    cmpt!: number;

    constructor(name: String, price: number, d1: number, d2: number) {
        this.name = name;
        this.texte = "c'est une " + name;
        this.price = price;
        this.adDate = d1;
        this.releaseDate = d2;
        this.cmpt = 0;
    }

}
