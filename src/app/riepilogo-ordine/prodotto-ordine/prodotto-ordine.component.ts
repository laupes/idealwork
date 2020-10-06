import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodotto-ordine',
  templateUrl: './prodotto-ordine.component.html',
  styleUrls: ['./prodotto-ordine.component.scss']
})
export class ProdottoOrdineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.lista-numeri').hide();

    $('.dropdown-button').click(function() {
      $('.lista-numeri').show();
      $(select).change(function() {
        var str = "";
        $('select option:selected').each(function() {
          str += $(this).text + "";
        });
        $('.dropdown-button-default').text(str);
      });
    });
  }

}
