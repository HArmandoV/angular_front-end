import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  updateproductForm: FormGroup


  constructor( private _builder: FormBuilder){
    this.updateproductForm = this._builder.group({
     product_name: ['', Validators.required],
     product_id: ['', Validators.required],
     availability: [''],
     product_price: ['', Validators.required],
     product_color: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  
  //seleccion: string = ''

}
