import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokerFirstComponentFunction = new EventEmitter();

  subVar: Subscription;

  constructor() { }

  onFirstComponentButtonClick(title: string): void{
    this.invokerFirstComponentFunction.emit(title);
  }
}
