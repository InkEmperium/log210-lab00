export class De {
    // classe inspirée de la classe conceptuelle (du MDD)
    private _valeur!: number;
    constructor() {
        this.brasser();
    }

    public brasser() {
        this._valeur = Math.floor(Math.random() * (7-1) + 1);
    }

    get valeur() {
        return this._valeur;
    }
}