import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent implements OnInit {
  breadcrumb$: Observable<any[]> | undefined;
  constructor(private bcService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumb$= this.bcService.breadcrumbs$;
  }
}
