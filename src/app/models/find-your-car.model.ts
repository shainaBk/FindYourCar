export class FindYourCar {

    cmpt!: number
    texte?: string
    constructor(
        public name: string,
        public price: number,
        public adDate: number,
        public releaseDate?: number
    ) {
        this.cmpt = 0;
        this.texte = "c'est une " + this.name
    }

}
