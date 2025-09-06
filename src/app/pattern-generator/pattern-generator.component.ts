import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { PatternService } from '../services/pattern.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-pattern-generator',
  imports: [],
  templateUrl: './pattern-generator.component.html',
  styleUrl: './pattern-generator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PatternService],
})
export class PatternGeneratorComponent implements OnInit {
  private patternService = inject(PatternService);

  private addNewValue(newValue: number) {
    this.values.update((prev) => [...prev, newValue]);
  }

  values = signal<number[]>([]);

  ngOnInit(): void {
    const firstValue = Math.round(Math.random() * 100);
    this.addNewValue(firstValue);
  }

  getNextValue() {
    const currentValues = this.values();
    const nextValue = this.patternService.getNextValue(
      currentValues[currentValues.length - 1]
    );
    this.addNewValue(nextValue);
  }
}
