import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paging-header.component.html',
  styleUrl: './paging-header.component.scss'
})
export class PagingHeaderComponent {
@Input() pageNumber: number=1;
@Input() pageSize: number=0;
@Input() totalCount: number=0;

}
