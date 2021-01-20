import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { DocumentazioneModule } from '../documentazione.module';

@Component({
  selector: 'app-titolo-pagina',
  templateUrl: './titolo-pagina.component.html',
  styleUrls: ['./titolo-pagina.component.scss']
})
export class TitoloPaginaComponent implements OnInit {

  titolo: string;

  constructor() { }

  ngOnInit(): void {
    this.titolo = sessionStorage.getItem('soluzione');
  }

}
