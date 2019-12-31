import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-catalog',
  templateUrl: './new-catalog.component.html',
  styleUrls: ['./new-catalog.component.scss']
})
export class NewCatalogComponent implements OnInit {

  public createCatalog(){
    var inputcatalogName = <HTMLInputElement> document.querySelector("#catalogName");
    var inputCN = inputcatalogName.value;

    var inputcatalogId = <HTMLInputElement> document.querySelector("#catalogId");
    var inputCI = inputcatalogId.value;

    var inputAvailability = <HTMLInputElement> document.querySelector("#availabilityy");
    var inputA = inputAvailability.checked;
    console.log(inputA);

    var inputCatalogPrice = <HTMLInputElement> document.querySelector("#catalogPrice");
    var inputCP = Number(inputCatalogPrice.value);
    console.log(inputCP);
    
    this._http.get('http://localhost:2020/catalogWrite?id_catalog=' + inputCI + '&catalog_name='+ inputCN + '&availability='+  inputA + '&catalog_price=' + inputCP, {responseType: 'text'}).subscribe((data) =>  {
      window.location.reload();
    });
  }

  newcatalogForm: FormGroup

  constructor( private _builder: FormBuilder, private _http: HttpClient) {
    this.newcatalogForm = this._builder.group({
     catalog_name: ['', Validators.required],
     catalog_id: ['', Validators.required],
     availability: [''],
     catalog_price: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

}
