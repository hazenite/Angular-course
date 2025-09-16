import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring',
})
export class SubstringPipe implements PipeTransform {
  transform(value: string, substring: string): string {
    if (value.includes(substring)) {
      return 'Znaleziono';
    } else {
      return 'Nieznaleziono';
    }
  }
}
