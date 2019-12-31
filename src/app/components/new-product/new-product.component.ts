import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  newproductForm: FormGroup

  constructor( private _builder: FormBuilder){
    this.newproductForm = this._builder.group({
     product_name: ['', Validators.required],
     product_id: ['', Validators.required],
     availability: [''],
     product_price: ['', Validators.required],
     product_color: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

}
