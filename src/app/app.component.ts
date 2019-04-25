
import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'JsonReader';
  constructor (private httpService: HttpClient){}
  arrProducts: string[];
 // arrProducts:[];
  /*policies: [] = [
    {id: 0, name: "policy001"},
    {id: 2, name: "policy002"},
    {id: 3, name: "policy003"},
    {id: 4, name: "policy004"},
    {id: 5, name: "policy005"},
  ];*/
  ngOnInit() {
    this.httpService.get('src\assets\products.json').subscribe(

      data => {
        this.arrProducts = data as string[];
        console.log(this.arrProducts[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
