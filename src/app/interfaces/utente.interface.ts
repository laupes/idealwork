
export class Utente {
    email: string;
    nome: string;
    cognome: string;
    password: string;
    hash: string;
    // tslint:disable-next-line: variable-name
    auth_name: string;
    abilitato: number;
    lingua: string;
    um: string;
    divisa: string;
    // tslint:disable-next-line: variable-name
    psw_iniziale: number;
    azienda?: string;
}
