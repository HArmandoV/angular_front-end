
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-catalog',
  templateUrl: './admin-catalog.component.html',
  styleUrls: ['./admin-catalog.component.scss']
})
export class AdminCatalogComponent implements OnInit {

  public catalogDelete(){
    var inputElement = <HTMLInputElement> document.querySelector("#id-catalog-html");
    var id = inputElement.value;
    this._http.get('http://localhost:2020/catalogDelete/' + id, {responseType: 'text'}).subscribe((data) =>  {
      window.location.reload();
    });
  }

  constructor(

    private _http: HttpClient
  ) { 
    this._http.get('http://localhost:2020/allCatalogs', {responseType: 'text'}).subscribe
    ((data) => {
      //console.log(data.replace(/'/g,"\""));
      let json = JSON.parse(data.replace(/'/g,"\""));


      var values = json["values"];
      console.log(values);
      
      var elementsHtml = '<ol>';

      for(var i = 0; i<values.length; i++){
        var catalog = values[i];
        console.log(catalog["id_catalog"]);
        elementsHtml = elementsHtml+'<li> Catalog name: '+ catalog["catalog_name"] + ' Id Catalog: ' +
        catalog["id_catalog"] + ' Availability: ' + catalog["availability"] + ' Catalog price: ' + catalog["catalog_price"] + '</li>';
      }
      elementsHtml = elementsHtml + '</ol>';
      var element = <HTMLElement> document.querySelector("#catalog-elements");
      element.innerHTML = elementsHtml;
      //.innerHTML(elementsHtml);

    });
  }


  ngOnInit() {
    
  }

}


