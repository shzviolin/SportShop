import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ShopComponent } from './shop/shop.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { ToastrService } from 'ngx-toastr';


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
    ]
})
export class AppComponent implements OnInit {
  title = 'Sport Shop';

  constructor(){}

  ngOnInit(): void {}
}
