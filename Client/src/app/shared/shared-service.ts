import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PriceFormattingService {
  formatPrice(price: number): string {
    return '$' + price.toFixed(2);
  }
}