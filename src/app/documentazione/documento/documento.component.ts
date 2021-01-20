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
    if (sessionStorage.getItem('PosaOCertificato') === 'certificato') {
      this.dataService.getSoluzioneDocumenti()
      .subscribe((response: object[]) => this.certificati = response['certificati'].sort(function(a, b) {
        return a.sequenza - b.sequenza;
      }));
    } else {
      this.dataService.getSoluzioneDocumenti()
      .subscribe((response: object[]) => this.certificati = response['posa'].sort(function(a, b) {
        return a.sequenza - b.sequenza;
      }));
    }

  }

  downloadFile(data: any): void {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  scarica(link: string): any {
    this.dataService.scaricaPdf(link).subscribe((response: Blob) => this.downloadFile(response));
  }

  goToLink(url: string): void {
    window.open(url, 'blank');
  }

}
