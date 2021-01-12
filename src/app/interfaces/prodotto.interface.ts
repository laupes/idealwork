import { Materiale } from "./materiale.interface";

export class Prodotto {
    img: string;
    materiali: Materiale[];
    nome_cartella: string;
    sequenza: number;
    testo: string;
}