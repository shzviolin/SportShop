import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { SectionHeaderComponent } from './core/section-header/section-header.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
      NgbModule
    ]
})
export class AppComponent implements OnInit {
  title = 'Sport Shop';

  constructor(){}

  ngOnInit(): void {}
}
