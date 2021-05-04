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

  constructor(private dataService: AuthService) { }

  ngOnInit(): void {
    //this.titolo = sessionStorage.getItem('soluzione');
    if (sessionStorage.getItem('PosaOCertificato') === 'certificato') {
      this.dataService.getSoluzioneDocumenti()
      .subscribe((response: object[]) => {
        if (response['message'] === undefined) {
          if (response) {
            this.titolo = response['certificati'][0]['categoria'];
          } else {
            console.log('else');
          }
        } else {

        }
      });
    } else if (sessionStorage.getItem('PosaOCertificato') === 'posa') {
      this.dataService.getSoluzioneDocumenti()
      .subscribe((response: object[]) => {
        if (response['message'] === undefined) {
          if (response['posa'][0]) {
            this.titolo = response['posa'][0].categoria;
          } else {

          }
        } else {

        }
      });
      } else {
        this.dataService.getSoluzioneDocumenti()
        .subscribe((response: object[]) => {
          if (response['message'] === undefined) {
            if (response['sistema'][0]) {
              this.titolo = response['sistema'][0].categoria;
            } else {
  
            }
          } else {
  
          }
        });
      }
  }

}
