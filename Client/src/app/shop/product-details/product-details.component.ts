import { Component } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { ShopService } from '../shop.service';
import { error } from 'console';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  product!: IProduct;

  constructor(
    private shopService: ShopService,
    private activateRoute: ActivatedRoute,
    private bcService:BreadcrumbService 
     ) {
      this.bcService.set('@productDetails','');
     }

  ngOnInit(){
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')!).subscribe(
      (product) => {
        this.product = product;
        this.bcService.set('@productDetails',product.name);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  formatPrice(price: number): string {
    return '$' + price.toFixed(2);
  }
}
