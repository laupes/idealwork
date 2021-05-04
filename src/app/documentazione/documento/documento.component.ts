import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {

  certificati: object[];
  pdfSource = 'https://www.idealwork.it/wp-content/REPOSITORYFILE/CATALOGHI/cat_architop.pdf';

  constructor(private dataService: AuthService, private routes: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('PosaOCertificato') === 'certificato') {
      this.dataService.getSoluzioneDocumenti()
      .subscribe((response: object[]) => {
        if (response['message'] === undefined) {
          this.certificati = response['certificati'].sort(function(a, b) {
            return a.sequenza - b.sequenza;
          });
        } else {
          alert('Session Expired');
          this.routes.navigate(['login']);
        }
      });
    } else if (sessionStorage.getItem('PosaOCertificato') === 'posa') {
      this.dataService.getSoluzioneDocumenti()
      .subscribe((response: object[]) => {
        if (response['message'] === undefined) {
          this.certificati = response['posa'].sort(function(a, b) {
            return a.sequenza - b.sequenza;
          });
        } else {
          alert('Session Expired');
          this.routes.navigate(['login']);
        }
      });
      } else {
        this.dataService.getSoluzioneDocumenti()
        .subscribe((response: object[]) => {
          if (response['message'] === undefined) {
            this.certificati = response['sistema'].sort(function(a, b) {
              return a.sequenza - b.sequenza;
            });
          } else {
            alert('Session Expired');
            this.routes.navigate(['login']);
          }
        });
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

