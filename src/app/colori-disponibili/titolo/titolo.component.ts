import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo',
  templateUrl: './titolo.component.html',
  styleUrls: ['./titolo.component.scss']
})
export class TitoloComponent implements OnInit {

  constructor(private dataService: AuthService) { }
  // colori: any[];
  titolo: string;

  ngOnInit(): void {
    // this.dataService.getSoluzioneColore().subscribe((response: any[]) => this.colori = response);
    this.titolo = sessionStorage.getItem('soluzione');
  }

}
