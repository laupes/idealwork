import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colori',
  templateUrl: './colori.component.html',
  styleUrls: ['./colori.component.scss']
})
export class ColoriComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.lista-colori').hide();
    $('.colori-link').click(function() {
      $('.lista-colori').toggle();
    });
  }

}
