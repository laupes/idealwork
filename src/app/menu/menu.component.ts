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
    $('.fa-times').hide();

      $('.topnav').click(function() {
        $('#myLinks').toggle();
        $('.icon').toggle();
        $('#logo').toggle();
        $('.fa-times').toggle();
      });
  }
}
