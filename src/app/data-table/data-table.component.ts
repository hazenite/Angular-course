import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-data-table',
  imports: [PaginationComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  @ViewChild('pagination')
  paginationRef!: PaginationComponent;

  elements: string[] = [];

  refreshData() {
    const pageNumber = this.paginationRef.pageNumber;

    this.elements.push(`Pobieranie danych ze strony ${pageNumber}`);
  }
}
