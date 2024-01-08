import { Component } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  products: IProduct[] = [];

  constructor(private shopServive:ShopService) { }

  ngOnInit(){
    this.shopServive.getProducts().subscribe(response=>{
      this.products=response.data;
    },error=>{
      console.log(error);
    });
  }
}
