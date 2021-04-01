import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo',
  templateUrl: './titolo.component.html',
  styleUrls: ['./titolo.component.scss']
})
export class TitoloComponent implements OnInit {

  soluzione: string;

  constructor() { }

  ngOnInit(): void {
    this.soluzione = sessionStorage.getItem('soluzione');
  }

}
