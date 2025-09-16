import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foo',
})
export class FooPipe implements PipeTransform {
  transform(value: number): number {
    return value ** 2 + 50;
  }
}
