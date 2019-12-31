import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new-catalog',
  templateUrl: './new-catalog.component.html',
  styleUrls: ['./new-catalog.component.scss']
})
export class NewCatalogComponent implements OnInit {

  newcatalogForm: FormGroup

  constructor( private _builder: FormBuilder){
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
