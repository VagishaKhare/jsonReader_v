
import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'JsonReader';
  constructor ( private httpService: HttpClient,private router:Router){
  }
  arrProducts: string [];
  //arrProducts: any;
  public data: any;
 // arrProducts:[]=[];
  /*policies: [] = [
    {id: 0, name: "policy001"},
    {id: 2, name: "policy002"},
    {id: 3, name: "policy003"},
    {id: 4, name: "policy004"},
    {id: 5, name: "policy005"},
  ];*/
  /*ngOnInit() {

    /*this.httpService.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      data => {
        console.log(data);
        this.arrProducts = data as string[];
        console.log(this.arrProducts[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    //src\assets\products.json
    //'https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot'
    this.httpService.get('../assets/products.json', {observe:'response'}).subscribe( res => {
      console.log(res.body) ;
      this.arrProducts = response as string[];
      //console.log(response);
      let response = res.body;
     // this.arrProducts = response.data.children;
      //var arrProducts=res.body as string[];
      //this.data = response;
    });
}*/
ngOnInit () {
  this.httpService.get('../assets/products.json').subscribe(
    data => {
      this.arrProducts = data as string [];	 // FILL THE ARRAY WITH DATA.
      //  console.log(this.arrBirds[1]);
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
}
btnClick = function () {
  debugger;
  this.router.navigateByUrl('/edit-form');
  //this.Router.navigateByUrl('/edit-form');
};
}
