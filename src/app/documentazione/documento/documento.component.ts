import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {

  certificati: object[];

  constructor(private dataService: AuthService) { }

  ngOnInit(): void {
    this.dataService.getSoluzioneDocumenti()
    .subscribe((response: object[]) => this.certificati = response['certificati'].sort(function(a, b) {
      return a.sequenza - b.sequenza;
    }));
  }

  scarica(link: string): any {
    this.dataService.scaricaPdf(link);
  }

}
