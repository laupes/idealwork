import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class DataService {

    private check = new BehaviorSubject<boolean>(false);
    currentCheck = this.check.asObservable();

    constructor() {}

    changeCheck(bol: boolean): void {
        this.check.next(bol);
    }
}



