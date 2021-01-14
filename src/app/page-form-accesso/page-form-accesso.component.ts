import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-form-accesso',
  templateUrl: './page-form-accesso.component.html',
  styleUrls: ['./page-form-accesso.component.scss']
})
export class PageFormAccessoComponent implements OnInit {

  constructor(private dataService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.email = params['email'];
      this.hash = params['hash'];
  });
  }
  email: string;
  hash: string;

  ngOnInit(): void {
  }

  signIn(credentials: any): any {
    this.dataService.reimpostaPassword(this.email, this.hash, credentials)
      .subscribe((result: string) => {
        if (result.includes('success')) {
          this.router.navigate(['']);
        }
        else if (result.includes('invalid_link')){
          return alert('invalid link');
        } else {
          return alert('richiesta errata');
        }
      });
  }

}
