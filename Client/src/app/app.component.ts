import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { SectionHeaderComponent } from './core/section-header/section-header.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    NgxPaginationModule,
    HomeComponent,
    CoreModule,
    SectionHeaderComponent,
    NgxSpinnerModule,
    NgbModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'Sport Shop';

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const basketId = localStorage.getItem('basket_id');
      if (basketId) {
        this.basketService.getBasket(basketId).subscribe(() => {
          console.log('initialized basket');
        }, error => {
          console.log(error);
        });
      }
    } else {
      console.error('localStorage is not available.');
    }
  }
}
