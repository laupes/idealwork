import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthService } from 'src/app/core/auth.service';
import { DataService } from 'src/app/data.service';
import { EventEmitterService } from 'src/app/event-emitter.service';
import { Soluzione } from 'src/app/interfaces/soluzione.interface';
import { Intro } from 'src/app/interfaces/intro.interface';

@Component({
  selector: 'app-soluzione',
  templateUrl: './soluzione.component.html',
  styleUrls: ['./soluzione.component.scss']
})
export class SoluzioneComponent implements OnInit {

  soluzioni: Soluzione[];
  titolo: string;
  descrizione: string;

  constructor(private dataService: AuthService) { }

  ngOnInit(): void {
    this.dataService.getSoluzioni().subscribe((response: Soluzione[]) => this.soluzioni = response['soluzioni']);
    this.dataService.getSoluzioni().subscribe((response: string[]) => this.titolo = response['intro'][0]['titolo']);
    this.dataService.getSoluzioni().subscribe((response: string[]) => this.descrizione = response['intro'][0]['descrizione']);
    // this.dataService.getSoluzioni().subscribe((intro: Intro[]) => this.titolo = intro[0].titolo);

    $('.navigation').show();
  }

}
