import { Component, OnInit } from '@angular/core';
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

  lingue: object[] = [
    {value: 'IT-0', viewValue: 'IT'},
    {value: 'EN-1', viewValue: 'EN'},
    {value: 'FR-2', viewValue: 'FR'},
    {value: 'DE-3', viewValue: 'DE'},
    {value: 'NL-4', viewValue: 'NL'},
  ];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    var navbar = document.querySelector('.navbar');
    var ham = document.querySelector('.ham');
    this.data.currentCheck.subscribe(check => this.check = check);

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
  };
}