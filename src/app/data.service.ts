import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class DataService {

    private check = new BehaviorSubject<boolean>(false);
    currentCheck = this.check.asObservable();
    private lingua = new BehaviorSubject<string>(sessionStorage.getItem('lingua') ? sessionStorage.getItem('lingua') : ' ');
    currentLingua = this.lingua.asObservable();

    constructor() { }

    changeCheck(bol: boolean): void {
        this.check.next(bol);
    }

    changeLingua(lingua: string): void {
        this.lingua.next(lingua);
    }

}



