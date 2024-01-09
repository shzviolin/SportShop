import { Component } from '@angular/core';
import { ShopService } from './shop.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { IProduct } from '../shared/models/product';
import { ProductItemComponent } from './product-item/product-item.component';
import { IBrand } from '../shared/models/brand';
import { IProductType } from '../shared/models/productType';
import { response } from 'express';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  products: IProduct[] = [];
  brands: IBrand[] = [];
  productTypes: IProductType[] = [];
  brandIdSelected: number = 0;
  productTypeIdSelected: number = 0;

  constructor(private shopServive: ShopService) {}

  ngOnInit() {
    this.getProducts();
    this.getBrands();
    this.getProductTypes();
  }

  getProducts() {
    this.shopServive
      .getProducts(this.brandIdSelected, this.productTypeIdSelected)
      .subscribe(
        (response) => {
          if (response) this.products = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getBrands() {
    this.shopServive.getBrands().subscribe(
      (response) => {
        this.brands = [{ id: 0, name: 'All' }, ...response];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProductTypes() {
    this.shopServive.getProductTypes().subscribe(
      (response) => {
        this.productTypes = [{ id: 0, name: 'All' }, ...response];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onProducttypeSelected(productTypeId: number) {
    this.productTypeIdSelected = productTypeId;
    this.getProducts();
  }
}
