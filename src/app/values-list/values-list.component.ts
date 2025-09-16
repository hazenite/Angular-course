import { Component, inject } from '@angular/core';
import { ValuesServiceService } from '../services/values-service.service';
import { NewValueComponent } from '../new-value/new-value.component';
import { CountsMorePipe } from '../pipes/counts-more.pipe';
import { CountsLessPipe } from "../pipes/counts-less.pipe";

@Component({
  selector: 'app-values-list',
  imports: [NewValueComponent, CountsMorePipe, CountsLessPipe],
  templateUrl: './values-list.component.html',
  styleUrl: './values-list.component.scss',
})
export class ValuesListComponent {
  private valuesServices = inject(ValuesServiceService);
  values = this.valuesServices.numbers;
}
