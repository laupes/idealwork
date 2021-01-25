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


    // DROPDOWN MENU
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    };

  }

  openWindow(): void {
    window.open('http://localhost:4200/#/', '_self');
  }

  closeWindow(): void {
    window.close();
  }

  tornaApp(): void {
    this.openWindow();
    this.closeWindow();
  }

}
