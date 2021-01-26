import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Component, Input, OnInit } from '@angular/core';
// import { $ } from 'protractor';
import * as $ from 'jquery';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  check: boolean;

  lingue: string[];
  linguaSelezionata: string;

  constructor(private data: DataService, private dataService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    var navbar = document.querySelector('.navbar');
    var ham = document.querySelector('.ham');
    this.data.currentCheck.subscribe(check => this.check = check);

    // this.lingue = this.dataService.staticLingue;
    console.log(this.dataService.staticLingue);
    if (this.dataService.staticLingue) {
      this.dataService.staticLingue.forEach((x) => {
        this.lingue.push(x['lingua']);
      });
    }
    this.linguaSelezionata = sessionStorage.getItem('lingua');

    // toggles hamburger menu in and out when clicking on the hamburger
    function toggleHamburger(){
      navbar.classList.toggle('showNav');
      ham.classList.toggle('showClose');
    }

    ham.addEventListener('click', toggleHamburger);

    // toggle when clicking on links

    // METHOD 1
    var menuLinks = document.querySelectorAll('.menuLink');
    menuLinks.forEach(
      function(menuLink) {
        menuLink.addEventListener('click', toggleHamburger);
      }
    );
  }

  setLingua(lingua: string): void {
    const linguaS = sessionStorage.getItem('lingua');
    sessionStorage.setItem('lingua', lingua);
    this.lingue.push(linguaS);
    localStorage.removeItem('linguaArray');
    this.lingue.forEach((x) => {
      if (x !== lingua) {
        if (!localStorage.getItem('linguaArray')) {
          localStorage.setItem('linguaArray', x);
        } else {
          if (!localStorage.getItem('linguaArray').includes(x)) {
            localStorage.setItem('linguaArray', localStorage.getItem('linguaArray') + ' ' + x);
          }
        }
      }
    });
    // this.router.navigate(['soluzioni']);
    window.location.reload();
  }
}
