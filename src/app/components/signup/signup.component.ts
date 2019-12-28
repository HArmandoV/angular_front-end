import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup

  constructor( private _builder: FormBuilder){
    this.signupForm = this._builder.group({
      name: ['', Validators.required],
     surname: [''],
     username: ['', Validators.required],
     password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

}
