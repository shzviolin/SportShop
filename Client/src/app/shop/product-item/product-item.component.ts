import { Component, Input } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product: IProduct

  constructor() {
    this.product={} as IProduct;
  }
  formatPrice(price: number): string {
    return '$' + price.toFixed(2);
  }
 }
