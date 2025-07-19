import { Component } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  pageNumber: number = 3;

  nextNumber() {
    this.pageNumber += 1;
  }

  previousNumber() {
    this.pageNumber -= 1;
  }
}
