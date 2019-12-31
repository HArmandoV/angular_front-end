import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor( private _builder: FormBuilder){
    this.loginForm = this._builder.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

}
