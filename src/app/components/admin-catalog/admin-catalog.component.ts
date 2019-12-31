import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-catalog',
  templateUrl: './admin-catalog.component.html',
  styleUrls: ['./admin-catalog.component.scss']
})
export class AdminCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    var request = require('request');
    request('http://localhost:2020/allCatalogs', function(error, response, body){
      console.log(response);
    });

    const req = request(
      {
        host: 'http://localhost:2020',
        path: '/allCatalogs',
        method: 'GET',
      },
      response => {
        console.log(response);
      }
    ); 
    req.end();
  }

}
