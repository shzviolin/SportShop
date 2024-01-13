import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ShopComponent } from './shop/shop.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule,
      RouterOutlet,
      CoreModule,
      ShopComponent,
      NgxPaginationModule
    ]
})
export class AppComponent implements OnInit {
  title = 'Sport Shop';

  constructor(){}

  ngOnInit(): void {}
}
