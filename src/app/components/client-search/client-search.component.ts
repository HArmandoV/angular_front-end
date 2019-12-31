import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {

  public searchProducts(){
    var inputElement = <HTMLInputElement> document.querySelector("#id-product-html");
    var id = inputElement.value;
    this._http.get('http://localhost:2020/allProducts/' + id, {responseType: 'text'}).subscribe((data) =>  {


    let json = JSON.parse(data.replace(/'/g,"\""));


      var values = json["values"];
      console.log(values);
      
      var elementsHtml = '<ol>';

      for(var i = 0; i<values.length; i++){
        var product = values[i];
        console.log(product["id_product"]);
        elementsHtml = elementsHtml+'<li> Product id: '+ product["id_product"] + 'Product name: '+ product["product_name"] + 'Id_catalog: '+ product["id_catalog"] + ' Availability: ' + product["availability"] + ' Product price: ' + product["product_price"] + ' Product color: ' + product["product_color"] + '</li>';
      }
      elementsHtml = elementsHtml + '</ol>';
      var element = <HTMLElement> document.querySelector("#products-elements");
      element.innerHTML = elementsHtml;
      //.innerHTML(elementsHtml);
    
    });
  }

  constructor(

    private _http: HttpClient
  ) { 
    this._http.get('http://localhost:2020/allProducts', {responseType: 'text'}).subscribe
    ((data) => {
      //console.log(data.replace(/'/g,"\""));
      let json = JSON.parse(data.replace(/'/g,"\""));


      var values = json["values"];
      console.log(values);
      
      var elementsHtml = '<ol>';

      for(var i = 0; i<values.length; i++){
        var product = values[i];
        console.log(product["id_catalog"]);
        elementsHtml = elementsHtml+'<li> Product id: '+ product["id_product"] + 'Product name: '+ product["product_name"] + 'Id_catalog: '+ product["id_catalog"] + ' Availability: ' + product["availability"] + ' Product price: ' + product["product_price"] + ' Product color: ' + product["product_color"] + '</li>';
      }
      elementsHtml = elementsHtml + '</ol>';
      var element = <HTMLElement> document.querySelector("#products-elements");
      element.innerHTML = data;
      //.innerHTML(elementsHtml);

    });
  }


  ngOnInit() {
    
  }

}