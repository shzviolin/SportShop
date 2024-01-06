import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';
import { IProduct } from './models/product';
import { IPagination } from './models/pagination';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule,
      RouterOutlet,
      NavBarComponent,
      HttpClientModule
    ]
})
export class AppComponent implements OnInit {
  title = 'Sport Shop';
  products: IProduct[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:5123/api/products?pageSize=50').subscribe(
      (response: any)=>{
        console.log(response.data);
        this.products=response.data;
      },error=>{
        console.log(error);
      });
  }
}
