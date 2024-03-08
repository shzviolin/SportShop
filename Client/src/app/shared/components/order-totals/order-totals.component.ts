import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketTotals } from '../../models/basket';
import { BasketService } from '../../../basket/basket.service';
import { CommonModule } from '@angular/common';
import { PriceFormattingService } from '../../shared-service';

@Component({
  selector: 'app-order-totals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.scss'
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$: Observable<IBasketTotals | null> | undefined;

  constructor(private basketService: BasketService, public priceFormattingService: PriceFormattingService){ }

  ngOnInit() {
    this.basketTotal$ = this.basketService.basketTotal$;
    
  }
}
