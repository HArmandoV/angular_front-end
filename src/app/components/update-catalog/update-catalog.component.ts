import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-catalog',
  templateUrl: './update-catalog.component.html',
  styleUrls: ['./update-catalog.component.scss']
})
export class UpdateCatalogComponent implements OnInit {

  updatecatalogForm: FormGroup

  constructor( private _builder: FormBuilder){
    this.updatecatalogForm = this._builder.group({
     catalog_name: ['', Validators.required],
     catalog_id: ['', Validators.required],
     availability: [''],
     catalog_price: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

}
