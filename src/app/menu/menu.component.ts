import { Component, OnInit } from '@angular/core';
// import { $ } from 'protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var navbar = document.querySelector(".navbar")
    var ham = document.querySelector(".ham")
    
    // toggles hamburger menu in and out when clicking on the hamburger
    function toggleHamburger(){
      navbar.classList.toggle("showNav")
      ham.classList.toggle("showClose")
    }
    
    ham.addEventListener("click", toggleHamburger)
    
    // toggle when clicking on links
    
    // METHOD 1
    var menuLinks = document.querySelectorAll(".menuLink")
    menuLinks.forEach( 
      function(menuLink) { 
        menuLink.addEventListener("click", toggleHamburger) 
      }
    )
  }
}
