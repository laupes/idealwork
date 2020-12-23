import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthService } from 'src/app/core/auth.service';
import { DataService } from 'src/app/data.service';
import { EventEmitterService } from 'src/app/event-emitter.service';
import { Soluzione } from 'src/app/interfaces/soluzione.interface';

@Component({
  selector: 'app-soluzione',
  templateUrl: './soluzione.component.html',
  styleUrls: ['./soluzione.component.scss']
})
export class SoluzioneComponent implements OnInit {

  soluzioni: Soluzione[];

  constructor(private dataService: AuthService) { }

  ngOnInit(): void {
    this.dataService.getSoluzioni().subscribe((soluzioni: Soluzione[]) => this.soluzioni = soluzioni);

    $('.navigation').show();
  }

}
